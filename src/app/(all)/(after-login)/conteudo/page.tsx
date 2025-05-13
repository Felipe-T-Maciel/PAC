'use client'

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface Content {
    thumb: string;
    title: string;
    content: string;
    subtitles?: string[];
    image?: string;
    exercises?: string[];
}

export default function Conteudo() {
    const [sideOpen, setSideOpen] = useState(false);
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
    const [content, setContent] = useState<Content>({
        thumb: "",
        title: "",
        content: "",
        subtitles: [],
        image: "",
        exercises: []
    });

    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    }

    const toggleExpand = (index: number) => {
        setExpandedIndexes(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        )
    }

    const contents = [
        {
            "thumb": "",
            "title": "Content 1",
            "subtitles": ["Subtitle", "Subtitle"],
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "image": "",
            "exercises": []
        },
        {
            "thumb": "",
            "title": "Content 2",
            "subtitles": ["Subtitle", "Subtitle"],
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "image": "",
            "exercises": []
        },
        {
            "thumb": "",
            "title": "Content 3",
            "subtitles": ["Subtitle", "Subtitle"],
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "image": "",
            "exercises": []
        },
        {
            "thumb": "",
            "title": "Content 4",
            "subtitles": ["Subtitle", "Subtitle"],
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "image": "",
            "exercises": []
        },
        {
            "thumb": "",
            "title": "Content 5",
            "subtitles": ["Subtitle", "Subtitle"],
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "image": "",
            "exercises": []
        },
        {
            "thumb": "",
            "title": "Content 6",
            "subtitles": ["Subtitle", "Subtitle"],
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "image": "",
            "exercises": []
        },
    ];

    return (
        <>
            <main className="h-full w-full relative flex overflow-hidden">
                <img className="absolute -bottom-15 -right-10 -z-10" src="/back4.svg" alt="" />
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: sideOpen ? "15%" : 0 }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className={`left-0 top-0 h-full bg-gradient-to-bl from-[#003550] via-[#003550] to-[#3E7B9A] text-white`}
                    style={{ display: sideOpen ? "block" : "" }}
                >
                    {sideOpen &&
                        <div className="flex flex-col gap-2 p-4 py-20 overflow-y-auto h-full">
                            {contents.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <div
                                        className="flex items-center justify-between p-2 rounded-md"
                                    >
                                        <span
                                            className="cursor-pointer" onClick={() => {
                                                setContent(item);
                                                if (content.title !== item.title && expandedIndexes.includes(index)) {

                                                } else {
                                                    toggleExpand(index);
                                                }
                                            }}>{item.title}</span>
                                        <span
                                            onClick={() => toggleExpand(index)}
                                            className={`transition-all duration-200 pi cursor-pointer pi-angle-up ` + (expandedIndexes.includes(index) ? "rotate-180" : "")} />
                                    </div>

                                    <AnimatePresence>
                                        {expandedIndexes.includes(index) && (
                                            <motion.div
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                variants={{
                                                    hidden: { height: 0, opacity: 0 },
                                                    show: { height: 'auto', opacity: 1, transition: { staggerChildren: 0.1 } },
                                                }}
                                                className="pl-4 overflow-hidden">
                                                {item.subtitles.map((subtitle, subIndex) => (
                                                    <motion.div
                                                        variants={itemVariants}
                                                        key={subIndex} className="cursor-pointer p-1 text-sm">
                                                        {subtitle}
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    }
                </motion.div>
                <motion.div
                    initial={{ left: 0 }}
                    animate={{ left: sideOpen ? "15.5rem" : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    onClick={() => { setSideOpen(!sideOpen) }} className={` text-white bg-gradient-to-bl from-[#003550] to-[#003550]  w-7 h-10  top-[50%] left-0 -translate-y-1/2 rounded-r-full shadow-custom items-center flex justify-center absolute `}>
                    <span
                        className={`transition-all duration-200  pi cursor-pointer pi-angle-right ` + (sideOpen ? " rotate-180" : "left-2")}
                    ></span>
                </motion.div>
                <AnimatePresence>
                    {content.title ? (
                        <motion.div
                            key={content.title}
                            className="w-full py-16">
                            <div id="image" className="bg-black h-[35%] w-full relative">
                                <Image src={content.thumb} width={0} height={0} layout="fill" objectFit="cover" alt="" />
                                <div className="absolute top-[15%] w-full bg-gradient-to-r  via-[#003550] to-[#f0f0f0] ">
                                    <span className="px-20 text-4xl text-white">{content.title}</span>
                                </div>
                            </div>

                            <motion.div
                                variants={itemVariants}
                                initial="hidden"
                                animate="show"
                                className="flex flex-col px-[10%] py-36">
                                <div>
                                    <span className="text-2xl">{content.content}</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={itemVariants}
                            className="text-xl texto-clip bg-gradient-to-r from-[#009be9] via-[#004b70] to-[#000000] bg-clip-text text-transparent  flex w-full h-full justify-center items-center gap-34 py-36">
                            <span>Nenhum conteúdo selecionado, acesse a aba lateral para navegar pelos conteúdos disponíveis.</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </>
    );
}