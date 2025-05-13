'use client'

import { useState } from "react";
import { motion } from "framer-motion";
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
    const [content, setContent] = useState<Content>({
        thumb: "",
        title: "",
        content: "",
        subtitles: [],
        image: "",
        exercises: []
    });
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

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
    ];

    const toggleExpand = (index: number) => {
        setExpandedIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <>
            <main className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative flex ">
                <span onClick={() => { setSideOpen(!sideOpen) }}
                    className={`transition-all duration-200 absolute top-[50%] pi cursor-pointer pi-angle-right ` + (sideOpen ? "left-[15.5%] rotate-180" : "left-2")}
                ></span>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: sideOpen ? "15%" : 0 }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className={`left-0 top-0 h-full bg-gradient-to-bl from-[#003550] via-[#003550] to-[#3E7B9A] text-white`}
                    style={{ display: sideOpen ? "block" : "" }}
                >
                    {sideOpen &&
                        <div className="flex flex-col gap-2 p-4 py-20">
                            {contents.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <div
                                        className="flex items-center justify-between p-2 rounded-md"
                                    >
                                        <span className="cursor-pointer" onClick={() => {
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
                                    {expandedIndexes.includes(index) && (
                                        <div className="pl-4">
                                            {item.subtitles.map((subtitle, subIndex) => (
                                                <div key={subIndex} className="cursor-pointer p-1 text-sm">
                                                    {subtitle}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    }
                </motion.div>
                {content.title ? (
                    <div className="w-full py-16 overflow-y-auto" >
                        <div id="image" className="bg-black h-[35%] w-full relative">
                            <Image src={content.thumb} width={document.getElementById("image")?.clientWidth} height={document.getElementById("image")?.clientHeight} alt=""></Image>
                            <div className="absolute top-[15%] w-full bg-gradient-to-r  via-[#003550] to-[#ffffff] ">
                                <span className="px-20 text-4xl text-white">{content.title}</span>
                            </div>
                        </div>

                        <div className="flex flex-col px-[10%] py-36">
                            <div>
                                <span className="text-2xl">{content.content}</span>
                            </div>
                        </div>
                        <div className="flex flex-col px-[10%] py-36">
                            <div>
                                <span className="text-2xl">{content.content}</span>
                            </div>
                        </div>
                        <div className="flex flex-col px-[10%] py-36">
                            <div>
                                <span className="text-2xl">{content.content}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex w-full h-full justify-center items-center gap-34 py-36">
                        <span>Nenhum conteúdo selecionado, acesse a aba lateral para navegar pelos conteúdos disponíveis</span>
                    </div>
                )}
            </main>
        </>
    );
}