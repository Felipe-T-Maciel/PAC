'use client'

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface ContentComponentProps {
    content: {
        thumb: string
        title: { text: string; content: string[]; image: string }
        subtitles: Array<{ text: string; content: string; image: string }>
        exercises: Array<{ title: string; content: string; image: string; options: Array<{ text: string }> }>
    }
    sectionRefs: React.MutableRefObject<Array<HTMLElement | null>>
}

export const ContentComponent = ({ content, sectionRefs }: ContentComponentProps) => {
    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    }

    const [logged, setLogged] = useState(false)
    const [answer, setAnswer] = useState<any>(null)

    useEffect(() => {
        console.log("Answer: ", answer);
    }, [answer])

    useEffect(() => {
        console.log(content.subtitles);
        
    }, [])

    return (
        <>
            {
                !logged && (
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <span onClick={() => { setLogged(true) }} className="bg-white p-7 text-3xl z-20 rounded-2xl shadow-2xl text-black">Faça login para acessar o conteúdo</span>
                    </div>
                )
            }
            <div className={`relative flex flex-col justify-center items-start w-full max-w-[75vw] ` + (logged ? "" : "blur-md")}>

                <motion.div
                    ref={el => { if (el) sectionRefs.current[0] = el }}
                    variants={itemVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col py-36"
                    data-scroll-id="title">
                    <div className="flex flex-col gap-20">
                        <span className="text-6xl">{content.title.text}</span>
                        <span className="text-2xl">{content.title.content[0]}</span>
                    </div>
                </motion.div>
                {content.title.image != null && (
                    <div className="flex justify-center w-full">
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col gap-20 rounded-xl shadow-2xl">
                            <Image src={content.title.image} width={1000} height={30} alt="" className="rounded-xl" />
                        </motion.div>
                    </div>
                )}
                {content.subtitles.map((sub, index) => (

                    <motion.section
                        key={index}
                        ref={el => { if (el) sectionRefs.current[index + 1] = el }}
                        variants={itemVariants}
                        initial="hidden"
                        animate="show"
                        className="py-16"
                    >
                        <h2 className="text-5xl mb-4">{sub.text}</h2>
                        <p className="text-2xl mb-6">{sub.content}</p>
                        {sub.image[0] && (
                            <div className="w-full h-60 relative mb-6">
                                <Image src={sub.image} fill alt="" className="object-cover rounded-xl shadow-lg" />
                            </div>
                        )}
                    </motion.section>
                ))}

                {
                    content.exercises != null && content.exercises.length > 0 && (
                        <motion.div
                            variants={itemVariants}
                            ref={el => { if (el) sectionRefs.current[(content.subtitles?.length ?? 0) + 1] = el }}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col py-36"
                            data-scroll-id="ex1">
                            <div className="flex flex-col gap-10">
                                <span className="text-5xl">{content.exercises[0].title}</span>
                                <span className="text-2xl">{content.exercises[0].content}</span>
                                <div className="flex flex-col gap-10 relative">
                                    <div className="flex flex-col gap-1">
                                        {content.exercises[0].options.map((item: any, index: number) => (
                                            <label key={index} className="flex items-center gap-4 cursor-pointer w-fit">
                                                <input className="peer hidden" onClick={(e) => setAnswer(e.currentTarget.value)} type="radio" name="answer" value={item.text} />
                                                <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-600 peer-checked:bg-slate-500 transition-all duration-300 flex items-center justify-center">
                                                    <div className="w-2.5 h-2.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                                                </div>
                                                <span className="text-2xl">{item.text}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, backgroundPosition: "100% 0%", transition: { duration: 0.4, ease: "easeOut" } }}
                                        whileTap={{ scale: 0.95 }}
                                        className="
                                                    shadow-custom cursor-pointer px-6 py-2 rounded-md font-medium
                                                    bg-gradient-to-br from-[#3E7B9A] via-[#003550] to-[#003550]
                                                    bg-[length:200%_100%] text-white w-34 text-center
                                                  "
                                    >
                                        Validar
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </div>
        </>
    )
}