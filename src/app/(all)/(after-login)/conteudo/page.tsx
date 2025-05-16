'use client'

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { contents } from "@/src/util/content";
import { ContentComponent } from "@/src/components/ContentComponent/ContentComponent";


interface Content {
    thumb: string
    title: { text: string; content: string[]; image: string }
    subtitles: Array<{ text: string; content: string; image: string }>
    exercises: Array<{ title: string; content: string; image: string; options: Array<{ text: string }> }>
}

export default function Conteudo() {
    const [sideOpen, setSideOpen] = useState(false);
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
    const sectionRefs = useRef<(HTMLElement | null)[]>([])
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const [content, setContent] = useState<Content>({
        thumb: "",
        title: {
            text: "",
            image: "",
            content: [],
        },
        subtitles: [{
            text: "",
            image: "",
            content: "",
        }],
        exercises: [],
    });

    useEffect(() => {
        document.body.getBoundingClientRect();
    }, [content]);

    useEffect(() => {
        const handleScroll = () => {
            const middleY = window.innerHeight / 2;

            const newIndex = sectionRefs.current.findIndex((el) => {
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top <= middleY && rect.bottom >= middleY;
            });

            if (newIndex !== -1 && newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeIndex]);


    const itemVariants = {
        hidden: { y: -10, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    }


    const toggleExpand = (index: number) => {
        setExpandedIndexes(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        )
    }

    const scrollToSection = (index: number) => {
        sectionRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
        });
        setActiveIndex(index);
    };


    const pointsCount = 1
        + (content.subtitles?.length ?? 0)
        + (content.exercises?.length ?? 0)
    return (
        <>
            <main className="h-full w-full relative flex overflow-hidden">
                {content?.title.text && (
                    <AnimatePresence>
                        <div key="nav-sidebar" className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center pointer-events-none z-10">
                            <div className="w-1 bg-gray-300 h-full absolute right-1.5" />
                            <div className="flex flex-col justify-between h-full py-8 pointer-events-auto">
                                {Array.from({ length: pointsCount }).map((_, index) => {
                                    sectionRefs.current = sectionRefs.current.slice(0, pointsCount)
                                    const isActive = index === activeIndex;
                                    return (
                                        <motion.div
                                            className="flex justify-between gap-5" key={index}>
                                            <motion.label
                                                className={`cursor-pointer  ${isActive ? "text-blue-500" : ""}`} htmlFor={`dot-${index}`}>
                                                {sectionRefs.current[index]?.textContent?.split(" ")[0]}
                                            </motion.label>
                                            <motion.button
                                                id={`dot-${index}`}
                                                key={`dot-${index}`}
                                                onClick={() => scrollToSection(index)}
                                                className={`cursor-pointer w-4 h-4 rounded-full border-2 mb-4 z-10 ${isActive ? 'bg-blue-500 border-blue-700' : 'bg-white border-gray-400'}`}
                                                initial={false}
                                                animate={{ scale: isActive ? 1.3 : 1, opacity: isActive ? 1 : 0.5 }}
                                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            />
                                        </motion.div>

                                    )
                                })}
                            </div>
                        </div>
                    </AnimatePresence>
                )}

                <motion.div
                    initial={{ width: "2%" }}
                    animate={{ width: sideOpen ? "18%" : "2%" }}
                    className={`flex  items-center`}>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: sideOpen ? "100%" : 0 }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className={`left-0 top-0 h-full bg-gradient-to-bl from-[#003550] via-[#003550] to-[#3E7B9A] text-white relative`}
                        style={{ display: sideOpen ? "block " : "" }}
                    >
                        {sideOpen && (
                            <>
                                <div

                                    className="w-full overflow-y-auto h-full flex flex-col p-5 scroll-smooth py-20 "
                                >
                                    {contents.map((item, index) => {
                                        const currentIndex = contents.findIndex(c => c.title.text === content.title.text);
                                        const isCompleted = index < currentIndex;
                                        const isActive = index === currentIndex;

                                        return (

                                            <div key={item.title.text} className="flex flex-col relative pl-6">
                                                <div className="absolute left-0 top-3 flex items-center justify-center">
                                                    <div
                                                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300
                                    ${isActive
                                                                ? 'bg-white border-white'
                                                                : isCompleted
                                                                    ? 'bg-gray-400 border-white'
                                                                    : 'bg-transparent border-gray-400'
                                                            }`}
                                                    />
                                                </div>

                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between p-2 rounded-md ">
                                                    <span
                                                        className="cursor-pointer"
                                                        onClick={() => {
                                                            setContent(item);
                                                            setActiveIndex(null);
                                                            if (content.title.text !== item.title.text && expandedIndexes.includes(index)) {
                                                            } else {
                                                                toggleExpand(index);
                                                            }
                                                        }}
                                                    >
                                                        {item.title.text}
                                                    </span>

                                                    <span
                                                        onClick={() => toggleExpand(index)}
                                                        className={`transition-all duration-200 pi cursor-pointer pi-angle-up ` +
                                                            (expandedIndexes.includes(index) ? "rotate-180" : "")}
                                                    />
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
                                                            className="pl-4 overflow-hidden"
                                                        >
                                                            {item.subtitles.map((subtitle, subIndex) => (
                                                                <motion.div
                                                                    variants={itemVariants}
                                                                    key={subIndex}
                                                                    onClick={() => {
                                                                        setContent(item),
                                                                            scrollToSection(subIndex + 1)
                                                                    }}
                                                                    className="cursor-pointer p-1 text-sm"
                                                                >
                                                                    {subtitle.text[subIndex]}
                                                                </motion.div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </>

                        )}
                    </motion.div>
                    <motion.div
                        initial={{ left: 0 }}
                        animate={{ left: sideOpen ? "15.5rem" : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        onClick={() => { setSideOpen(!sideOpen) }} className={`cursor-pointer z-10 text-white bg-gradient-to-bl from-[#003550] to-[#003550]  w-7 h-10  rounded-r-full shadow-custom items-center flex justify-center  `}>
                        <span
                            className={`transition-all duration-200  pi cursor-pointer pi-angle-right ` + (sideOpen ? " rotate-180" : "")}
                        ></span>
                    </motion.div>
                </motion.div>


                {content.title.text ? (
                    <div
                        key={content.title.text}
                        className="w-full overflow-y-auto h-full flex flex-col items-center ">
                        <div id="image" className="relative bg-black w-full h-full py-40">
                            <Image src={content.thumb} alt={content.title.text} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>

                        <ContentComponent sectionRefs={sectionRefs} content={content} />
                    </div>
                ) : (
                    <AnimatePresence>

                        <motion.div
                            key="empty"
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={itemVariants}
                            className="flex w-full h-full justify-center items-center gap-34 py-36">
                            <motion.span
                                style={{ backgroundSize: '300% 300%' }}
                                className="text-2xl bg-gradient-to-r from-[#3E7B9A] via-[#71C9F5] to-[#003550] bg-clip-text text-transparent inline-block"
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 4, ease: 'easeIn', repeat: Infinity }}
                            >Nenhum conteúdo selecionado, acesse a aba lateral para navegar pelos conteúdos disponíveis.</motion.span>
                        </motion.div>
                    </AnimatePresence>
                )}
            </main >
        </>
    );
}
