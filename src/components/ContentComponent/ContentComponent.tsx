import { motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"

interface ContentComponentProps {
    content: any
}

export const ContentComponent = ({ content }: ContentComponentProps) => {
    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    }
    //Precisa das tela de login pra colocar o usuario no context e verificar se tem ocnta ou nao
    const [logged, setLogged] = useState(false)

    return (
        <>
            {
                !logged && (
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <span onClick={() => {setLogged(true)}} className="bg-white p-10 text-5xl z-20 rounded-2xl shadow-2xl text-black">Faça login para acessar o conteúdo</span>
                    </div>
                )
            }
            <div className={`flex flex-col justify-center items-start w-full max-w-[75vw] ` + (logged ? "" : "blur-md ")}>
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col  py-36">
                    <div className="flex flex-col gap-20">
                        <span className="text-6xl">{content.title}</span>
                        <span className="text-2xl">{content.content[0]}</span>
                    </div>
                </motion.div>
                {content.image != null && (
                    <div className="flex justify-center w-full">
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col  gap-20 rounded-xl">
                            <Image src={content.image[0]} width={1000} height={30} alt="" className="rounded-xl" />
                        </motion.div>
                    </div>
                )}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col  py-36">
                    <div className="flex flex-col gap-20">
                        <span className="text-5xl">{content.subtitles[0]}</span>
                        <span className="text-2xl">{content.content[1]}</span>
                    </div>
                </motion.div>
                {content.image != null && (
                    <div className="flex justify-center w-full">
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col  gap-20 rounded-xl">
                            <Image src={content.image[1]} width={1000} height={30} alt="" className="rounded-xl" />
                        </motion.div>
                    </div>
                )}
                {
                    content.exercises != null && content.exercises.length > 0 && (
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col py-36">
                            <div className="flex flex-col gap-20">
                                <span className="text-5xl">{content.exercises[0].title}</span>
                                <span className="text-2xl">{content.exercises[0].content}</span>
                                <div>
                                    {content.exercises[0].options.map((item: any, index: number) => (
                                        <div key={index} className="flex gap-4">
                                            <input type="checkbox" name="" id="" />
                                            <span className="text-2xl">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </div>
        </>
    )
}