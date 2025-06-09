'use client'

import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { AnswerModalComponent } from "@/src/components/ContentComponent/components/AnswerModal"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ContentComponentProps {
    content: {
        thumb: string;
        title: { text: string; content: string; image?: string | null };
        subtitles: Array<{ text: string; contentMd: string; image?: string | null }>;
        exercises: Array<{
            id?: string;
            title?: string;
            content: string;
            image?: string | null;
            options?: Array<{ text: string; correct: boolean }>;
            answer?: string | null;
        }>;
    };
    sectionRefs: React.MutableRefObject<Array<HTMLElement | null>>;
}

interface ModalInfo {
    id: number;
    correct: boolean;
    answer?: string;
    correctAnswer?: string;
}

export const ContentComponent = ({ content, sectionRefs }: ContentComponentProps) => {
    const [showModal, setShowModal] = useState(false)
    const [modals, setModals] = useState<ModalInfo[]>([]);
    const [answer, setAnswer] = useState<any>(null)
    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    }

    const validateAnswer = (answerD?: string | null, id?: string) => {
        if (answerD != null || answerD != undefined) {
            let correctAnswer = content.exercises.find((exercise) => exercise.id === id)?.answer || "";
            let isCorrect = correctAnswer === answer;
            let newModal = {
                id: Date.now(),
                correct: isCorrect,
                answer: answer,
                correctAnswer: answerD || correctAnswer || "",
            };
            setModals((prev) => [...prev, newModal!]);
            setTimeout(() => {
                setModals((prev) => prev.filter((modal) => modal.id !== newModal.id));
            }, 4000);
        } else {
            let newModal = {
                id: Date.now(),
                correct: true,
                answer: answer,
                correctAnswer: content.exercises.find((exercise) => exercise.id === id)?.answer || "asdasd",
            };
            setModals((prev) => [...prev, newModal!]);
            setTimeout(() => {
                setModals((prev) => prev.filter((modal) => modal.id !== newModal.id));
            }, 4000);
        }
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

            <section className="relative bg-black w-full h-full p-30">
                <motion.div
                    ref={el => { if (el) sectionRefs.current[0] = el }}
                    variants={itemVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col "
                    data-scroll-id="title">
                    <div className="flex flex-col ">
                        <span className="text-6xl text-white">{content.title.text}</span>
                    </div>
                </motion.div>
            </section>

            <motion.div
                className={`py-2 fixed h-full w-[80%] md:w-[25%] flex flex-col  justify-end  ${modals.length > 0 ? "z-20" : "-z-10"}`}>
                <AnimatePresence>
                    {modals.map((modal, index) => (
                        <motion.div
                            key={modal.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="mb-4"
                        >
                            <AnswerModalComponent
                                correct={modal.correct}
                                correctAnswer={modal.correctAnswer}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
            
            <div className={` relative flex flex-col justify-center items-start w-full  max-w-[75vw]`}>
                <div className="py-4">
                </div>
                {content.subtitles.map((sub, idx) => (
                    <section className="w-full "
                        ref={el => { if (el) sectionRefs.current[idx + 1] = el }}
                        key={idx} >
                        <div className="w-full bg-gray-300 h-0.5 my-2 shadow-2xl rounded-lg mb-5"></div>

                        <h2 className="text-4xl mb-4">{sub.text}</h2>
                        <div className="text-2xl font-alata text-justify mb-8 max-w-full">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    pre: ({ node, ...props }) => (
                                        <pre className="p-4 rounded-md mb-4 font-alata w-full flex justify-center" {...props} />
                                    ),

                                    p: ({ node, children, ...props }) => {
                                        const isOnlyImage =
                                            node!.children.length === 1 &&
                                            node!.children[0].type === "element" &&
                                            node!.children[0].tagName === "img";

                                        if (isOnlyImage) {
                                            return (
                                                <div className="flex justify-center w-full mb-4">
                                                    {children}
                                                </div>
                                            );
                                        }

                                        return (
                                            <p
                                                className="break-words whitespace-pre-wrap font-alata text-xl py-2 mb-2"
                                                {...props}
                                            >
                                                {children}
                                            </p>
                                        );
                                    },

                                    img: ({ node, ...props }) => (
                                        <img className="rounded-xl max-w-full" {...props} />
                                    ),

                                    code: ({ node, ...props }) => (
                                        <code className="py-3 px-4 block font-alata text-xl bg-gray-600 text-white w-fit min-w-[40%] rounded-xl" {...props} />
                                    ),
                                    table: ({ node, ...props }) => (
                                        <div className="flex justify-center">
                                            <table className="text-xl font-alata text-justify mb-4 border border-white" {...props} />
                                        </div>
                                    ),
                                    thead: ({ node, ...props }) => (
                                        <thead className="bg-gray-200 text-black " {...props} />
                                    ),
                                    tbody: ({ node, ...props }) => (
                                        <tbody className="border-b border-white" {...props} />
                                    ),
                                    th: ({ node, ...props }) => (
                                        <th className="border px-4 py-2" {...props} />
                                    ),
                                    td: ({ node, ...props }) => (
                                        <td className="border px-4 py-2" {...props} />
                                    ),
                                    ul: ({ node, ...props }) => (
                                        <ul className="list-disc list-inside pl-5 mb-4 text-xl font-alata text-justify" {...props} />
                                    ),
                                    li: ({ node, ...props }) => (
                                        <li className="mb-2 text-xl font-alata text-justify" {...props} />
                                    ),
                                    strong: ({ node, ...props }) => (
                                        <strong className="font-bold">{props.children}</strong>
                                    ),
                                    a: ({ node, ...props }) => (
                                        <a
                                            target="_blank"
                                            className="text-blue-500 underline"
                                            {...props}
                                        />
                                    ),
                                }}
                            >
                                {sub.contentMd}
                            </ReactMarkdown>

                        </div>

                        {sub.image && (
                            <div className="flex justify-center w-full pb-7">
                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="show"
                                    className="flex flex-col rounded-xl shadow-2xl">
                                    <Image src={sub.image} width={400} height={10} alt="" className="rounded-xl" />
                                </motion.div>
                            </div>
                        )}
                    </section>
                ))}
                <div className="w-full bg-gray-300 h-0.5 my-2 shadow-2xl rounded-lg mb-5"></div>
                {content.exercises.map((exercise, index) => {
                    const idx = 1 + content.subtitles.length + index;
                    return (
                        <motion.section
                            key={index}
                            variants={itemVariants}
                            ref={el => { if (el) sectionRefs.current[idx] = el }}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col w-full"
                        >
                            <div className="flex flex-col mb-7">
                                <span className="text-4xl mb-3">{exercise.title}</span>
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        p: ({ node, children, ...props }) => (
                                            <p
                                                className="break-words whitespace-pre-wrap font-alata mb-4 text-xl  text-justify"
                                                {...props}
                                            >
                                                {children}
                                            </p>
                                        ),
                                        a: ({ node, ...props }) => (
                                            <a
                                                target="_blank"
                                                className="text-blue-500 underline"
                                                {...props}
                                            />
                                        ),
                                    }}
                                >
                                    {exercise.content}
                                </ReactMarkdown>

                                {exercise?.options && (

                                    <div className="flex flex-row lg:flex-col justify-between lg:justify-normal items-end lg:items-start gap-4 relative">
                                        <div className="flex flex-col gap-1">
                                            {exercise?.options.map((item: any, index: number) => (
                                                <label key={index} className="flex items-center gap-4 cursor-pointer w-fit">
                                                    <input className="peer hidden" onClick={(e) => setAnswer(e.currentTarget.value)} type="radio" name="answer" value={item.text} />
                                                    <div className="w-5 h-5 rounded-full border-2 bg-white border-gray-400 peer-checked:bg-blue-500 peer-checked:border-blue-700 transition-all duration-300 flex items-center justify-center">
                                                        <div className="w-2.5 h-2.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                                                    </div>
                                                    <span className="text-2xl ">{item.text}</span>
                                                </label>
                                            ))}
                                        </div>
                                        {exercise.options?.length > 0 ? (
                                            <motion.div
                                                variants={itemVariants}
                                                onClick={() => validateAnswer(exercise.answer, exercise.id)}
                                                whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } }}
                                                whileTap={{ scale: 0.95 }}
                                                className="shadow-custom cursor-pointer px-6 py-2 rounded-md font-medium
               bg-gradient-to-br from-[#3E7B9A] via-[#003550] to-[#003550]
               bg-[length:200%_100%] text-white w-34 text-center h-10"
                                            >
                                                Validar
                                            </motion.div>
                                        ) : exercise.answer != null ? (
                                            <motion.div
                                                variants={itemVariants}
                                                onClick={() => validateAnswer(null, exercise.id)}
                                                whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } }}
                                                whileTap={{ scale: 0.95 }}
                                                className=" shadow-custom cursor-pointer px-6 py-2 rounded-md font-medium
               bg-gradient-to-br from-[#3E7B9A] via-[#003550] to-[#003550]
               bg-[length:200%_100%] text-white w-38 text-center h-10"
                                            >
                                                Ver resposta
                                            </motion.div>
                                        ) : null}
                                    </div>
                                )}
                            </div>
                            <div className="w-full bg-gray-300 h-0.5 my-2 shadow-2xl rounded-lg mb-5"></div>
                        </motion.section>
                    )
                })}
            </div>
        </>
    )
}