'use client'

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { AnswerModalComponent } from "./components/AnswerModal/AnswerModalComponent"

interface ContentComponentProps {
    content: {
        thumb: string
        title: { text: string; content: string[]; image: string }
        subtitles: Array<{ text: string; content: string; image: string }>
        exercises: Array<{ title: string; content: string; image: string; options: Array<{ text: string }> }>
    }
    sectionRefs: React.MutableRefObject<Array<HTMLElement | null>>
}

interface ModalInfo {
    id: number;
    correct: boolean;
    answer: string;
}

export const ContentComponent = ({ content, sectionRefs }: ContentComponentProps) => {
    const [showModal, setShowModal] = useState(false)
    const [modals, setModals] = useState<ModalInfo[]>([]);
    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    }

    const [answer, setAnswer] = useState<any>(null)

    const validateAnswer = () => {
        const correctAnswer = content?.exercises?.[0]?.options?.find((item: any) => item.correct);
        const isCorrect = correctAnswer?.text === answer;

        const newModal = {
            id: Date.now(),
            correct: isCorrect,
            answer: answer,
        };

        setModals((prev) => [...prev, newModal]);

        setTimeout(() => {
            setModals((prev) => prev.filter((modal) => modal.id !== newModal.id));
        }, 4000);

    };

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (showModal) {
            timeout = setTimeout(() => {
                setShowModal(false);
                setAnswer(null);
            }, 4000);
        }

        return () => clearTimeout(timeout);
    }, [showModal]);

    return (
        <>
            <div id="image" className="relative bg-black w-full h-full p-30">
                <Image src={content.thumb} alt={content.title.text} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <motion.div
                className={`py-2 fixed h-full w-[80%] md:w-[25%] flex flex-col gap-5 justify-end  ${modals.length > 0 ? "z-20" : "-z-10"}`}>
                <AnimatePresence>
                    {modals.map((modal) => (
                        <motion.div
                            key={modal.id}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "7%", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full flex flex-col justify-center items-center gap-3 overflow-hidden"
                        >
                            <AnswerModalComponent correct={modal.correct} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
            <div className={`relative flex flex-col justify-center items-start w-full  max-w-[75vw] `}>
                <div className="py-16">
                    <motion.div
                        ref={el => { if (el) sectionRefs.current[0] = el }}
                        variants={itemVariants}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col "
                        data-scroll-id="title">
                        <div className="flex flex-col">
                            <span className="text-6xl mb-7">{content.title.text}</span>
                            <span className="text-2xl mb-10 text-justify">{content.title.content[0]}</span>
                        </div>
                    </motion.div>
                    {content.title.image != null && (
                        <div className="flex justify-center w-full">
                            <motion.div
                                variants={itemVariants}
                                initial="hidden"
                                animate="show"
                                className="flex flex-col rounded-xl shadow-2xl">
                                <Image src={content.title.image} width={1000} height={30} alt="" className="rounded-xl" />
                            </motion.div>
                        </div>
                    )}
                </div>
                <div className="w-full bg-gray-300 h-0.5 my-2 shadow-2xl rounded-lg"></div>

                {content.subtitles.map((sub, index) => (
                    <div key={index}>
                        <motion.section

                            ref={el => { if (el) sectionRefs.current[index + 1] = el }}
                            variants={itemVariants}
                            initial="hidden"
                            animate="show"
                            className="py-16 w-full"
                        >
                            <h2 className="text-5xl mb-7">{sub.text}</h2>
                            <p className="text-2xl mb-10 text-justify">{sub.content}</p>
                            {sub.image[0] && (
                                <div className="flex justify-center w-full h-60 relative">
                                    <Image src={sub.image} fill alt="" className="object-cover rounded-xl shadow-lg" />
                                </div>
                            )}

                        </motion.section>
                        <div className="w-full bg-gray-300 h-0.5 my-2 shadow-2xl rounded-lg"></div>
                    </div>
                ))}
                {
                    content.exercises != null && content.exercises.length > 0 && (
                        <motion.div
                            variants={itemVariants}
                            ref={el => { if (el) sectionRefs.current[(content.subtitles?.length ?? 0) + 1] = el }}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col py-16 "
                            data-scroll-id="ex1">
                            <div className="flex flex-col">
                                <span className="text-5xl mb-7">{content.exercises[0].title}</span>
                                <span className="text-2xl mb-10 text-justify">{content.exercises[0].content}</span>
                                <div className="flex flex-row lg:flex-col justify-between lg:justify-normal items-end lg:items-start gap-10 relative">
                                    <div className="flex flex-col gap-1">
                                        {content.exercises[0].options.map((item: any, index: number) => (
                                            <label key={index} className="flex items-center gap-4 cursor-pointer w-fit">
                                                <input className="peer hidden" onClick={(e) => setAnswer(e.currentTarget.value)} type="radio" name="answer" value={item.text} />
                                                <div className="w-5 h-5 rounded-full border-2 bg-white border-gray-400 peer-checked:bg-blue-500 peer-checked:border-blue-700 transition-all duration-300 flex items-center justify-center">
                                                    <div className="w-2.5 h-2.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                                                </div>
                                                <span className="text-2xl ">{item.text}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <motion.div
                                        variants={itemVariants}
                                        onClick={() => validateAnswer()}
                                        whileHover={{ scale: 1.05, backgroundPosition: "100% 0%", transition: { duration: 0.4, ease: "easeOut" } }}
                                        whileTap={{ scale: 0.95 }}
                                        className="
                                                    shadow-custom cursor-pointer px-6 py-2 rounded-md font-medium
                                                    bg-gradient-to-br from-[#3E7B9A] via-[#003550] to-[#003550]
                                                    bg-[length:200%_100%] text-white w-34 text-center h-10
                                                  "
                                    >
                                        Validar
                                    </motion.div>
                                </div>
                            </div>
                            <div className="w-full bg-gray-300 h-0.5 mt-10 -mb-6 shadow-2xl rounded-lg"></div>
                        </motion.div>
                    )
                }
            </div>
        </>
    )
}