'use client'

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    const [sideContentOpen, setSideContentOpen] = useState(false);
    const [logged, setLogged] = useState(false)
    const [screenSize, setScreenSize] = useState<number>(0);

    
    const getSidebarWidth = () => {
        if (screenSize < 1024) {
            return false
        }
        return true
    };
    
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

    const pointsCount = 1
        + (content.subtitles?.length ?? 0)
        + (content.exercises?.length ?? 0)

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

    useEffect(() => {
        scrollToSection(-1);
    }, [content]);

    const changePageButton = (option: "next" | "back") => {
        const index = contents.findIndex(c => c.title.text === content.title.text);
        const newIndex = option === "next" ? index + 1 : index - 1;
        setContent(contents[newIndex]);
        setActiveIndex(null);
    }

    return (
        <>
            <main className="h-full w-full relative flex overflow-hidden">
                {content?.title.text && getSidebarWidth() && (
                    <AnimatePresence>
                        {content && (
                            <motion.div
                                key={content.title.text}
                                style={{ maxHeight: "800px" }}
                                initial={{ height: 80, opacity: 0 }}
                                animate={{ height: sideContentOpen ? 80 : "auto", opacity: 1 }}
                                exit={{ height: 80, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className={`fixed right-8 top-1/5 flex flex-col items-center z-10 bg-gray-200 text-black shadow-lg rounded-lg px-4 w-40 overflow-hidden ${logged ? "" : "blur-md"}`}
                            >
                                <motion.div
                                    initial={{ height: '80%' }}
                                    animate={{ height: !sideContentOpen ? '80%' : '0%' }}
                                    exit={{ height: '80%' }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="w-1 bg-gray-300 absolute right-5.5 rounded-b-lg"
                                />
                                <span className="py-2">Índice</span>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: -10 },
                                        show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
                                    }}
                                    initial="hidden"
                                    animate={sideContentOpen ? 'hidden' : 'show'}
                                    exit="hidden"
                                    className={`flex flex-col gap-5 h-full w-full pt-2 pointer-events-auto z-10 ${sideContentOpen ? 'overflow-hidden' : ''}`}
                                >
                                    {Array.from({ length: pointsCount }).map((_, i) => {
                                        const isActive = i === activeIndex
                                        return (
                                            <motion.div
                                                key={i}
                                                variants={{
                                                    hidden: { opacity: 0, x: -10 },
                                                    show: { opacity: 1, x: 0 }
                                                }}
                                                className="flex justify-between gap-5"
                                            >
                                                <motion.label
                                                    className={`cursor-pointer ${isActive ? 'text-blue-500' : ''}`}
                                                    htmlFor={`dot-${i}`}
                                                >
                                                    {sectionRefs.current[i]?.textContent?.split(' ')[0]}
                                                </motion.label>
                                                <motion.button
                                                    id={`dot-${i}`}
                                                    onClick={() => scrollToSection(i)}
                                                    className={`w-4 h-4 rounded-full border-2 mb-4 cursor-pointer ${isActive ? 'bg-blue-500 border-blue-700' : 'bg-white border-gray-400'}`}
                                                    initial={false}
                                                    animate={{ scale: isActive ? 1.4 : 1, opacity: isActive ? 1 : 0.5 }}
                                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                                />
                                            </motion.div>
                                        )
                                    })}
                                </motion.div>

                                <motion.div
                                    className="flex justify-center items-center pt-2 "
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: sideContentOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span
                                        onClick={() => setSideContentOpen(!sideContentOpen)}
                                        className="pi pi-angle-up cursor-pointer transition-all duration-200 h-fit"
                                    />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                )}

                <motion.div
                    initial={{ width: "2%" }}
                    animate={{ width: sideOpen ? "16rem" : "2rem" }}
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
                            className={`absolute transition-all duration-200  pi cursor-pointer pi-angle-right ` + (sideOpen ? " rotate-180" : "")}
                        ></span>
                    </motion.div>
                </motion.div>

                {content.title.text ? (
                    <>
                        {
                            !logged && (
                                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                    <span onClick={() => { setLogged(true) }} className="bg-white p-7 text-3xl z-20 rounded-2xl shadow-2xl text-black">Faça login para acessar o conteúdo</span>
                                </div>
                            )
                        }
                        <div
                            key={content.title.text}
                            className={`w-full overflow-y-auto h-full flex flex-col items-center ${logged ? "" : "blur-md"}`}>

                            <ContentComponent sectionRefs={sectionRefs} content={content} />
                            <div className="w-full h-12 py-3 pb-5">
                                <div className="z-10 flex justify-center items-center gap-10 h-full">
                                    {contents[contents.findIndex(c => c.title.text === content.title.text) - 1] && (
                                        <motion.div
                                            variants={itemVariants}
                                            onClick={() => changePageButton("back")}
                                            whileHover={{ scale: 1.05, backgroundPosition: "100% 0%", transition: { duration: 0.4, ease: "easeOut" } }}
                                            whileTap={{ scale: 0.95 }}
                                            className="
                                                    shadow-custom cursor-pointer px-6 py-2 rounded-md font-medium
                                                    bg-gradient-to-br from-[#3E7B9A] via-[#003550] to-[#003550]
                                                    bg-[length:200%_100%] text-white w-34 text-center
                                                  ">Voltar
                                        </motion.div>
                                    )}
                                    {contents[contents.findIndex(c => c.title.text === content.title.text) + 1] && (
                                        <motion.div
                                            variants={itemVariants}
                                            onClick={() => changePageButton("next")}
                                            whileHover={{ scale: 1.05, backgroundPosition: "100% 0%", transition: { duration: 0.4, ease: "easeOut" } }}
                                            whileTap={{ scale: 0.95 }}
                                            className="
                                                    shadow-custom cursor-pointer px-6 py-2 rounded-md font-medium
                                                    bg-gradient-to-br from-[#3E7B9A] via-[#003550] to-[#003550]
                                                    bg-[length:200%_100%] text-white w-34 text-center
                                                  ">Próximo
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <AnimatePresence>

                        <motion.div
                            key="empty"
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={itemVariants}
                            className="flex w-full h-full justify-center items-center gap-34 py-36 px-4 md-px-0">
                            <motion.span
                                style={{ backgroundSize: '300% 300%' }}
                                className="text-xl md:text-2xl text-center bg-gradient-to-r from-[#3E7B9A] via-[#71C9F5] to-[#003550] bg-clip-text text-transparent inline-block"
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
