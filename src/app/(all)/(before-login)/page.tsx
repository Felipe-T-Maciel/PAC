"use client"

import React from "react";
import { motion } from "framer-motion";
import { LampIcon, CheckIcon, HelpIcon } from "@/src/components/Icons";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    const containerVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const section2Ref = React.useRef<HTMLDivElement>(null);


    return (
        <main className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">
            <section className="h-full w-full snap-start relative ">
                <img src="/back1.svg" alt="" className="absolute top-0 right-0 -z-10" />
                <img src="/back2.svg" alt="" className="absolute top-[15vh] left-0 -z-10" />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col h-full w-full justify-center items-center gap-40 overflow-hidden "
                >
                    <div className="flex flex-col justify-center items-center gap-4 pt-20 md:pt-0">
                        <motion.span variants={itemVariants} className="text-4xl">
                            Aprenda a programar
                        </motion.span>

                        <motion.span
                            variants={itemVariants}
                            className="text-2xl bg-gradient-to-r from-[#3E7B9A] via-[#71C9F5] to-[#003550] bg-clip-text text-transparent inline-block"
                            style={{ backgroundSize: '300% 300%' }}
                            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                            transition={{ duration: 4, ease: 'easeIn', repeat: Infinity }}
                        >
                            De uma forma simples mas que garante aprendizado.
                        </motion.span>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, backgroundPosition: "100% 0%", transition: { duration: 0.4, ease: "easeOut" } }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => section2Ref.current?.scrollIntoView({ behavior: "smooth" })}
                            className="
                shadow-custom cursor-pointer px-6 py-2 rounded-md font-medium
                bg-gradient-to-br from-[#3E7B9A] via-[#003550] to-[#003550]
                bg-[length:200%_100%] text-white
              "
                        >
                            Começar estudos
                        </motion.div>

                        <div className="grid grid-cols-2 place-items-center md:flex gap-20 py-20 ">
                            {[{
                                icon: <CheckIcon />,
                                title: 'Exemplos práticos',
                                desc: 'Aprenda a programar na prática'
                            }, {
                                icon: <LampIcon />,
                                title: 'Conteúdo didático',
                                desc: 'Aulas interativas e direto ao ponto'
                            }, {
                                icon: <HelpIcon />,
                                title: 'Auxílio total',
                                desc: 'Equipe pronta para te ajudar'
                            }].map((item, i, arr) => (
                                <motion.div
                                    key={i}
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="show"
                                    className={`flex flex-col items-center row-auto ${i === arr.length - 1 ? 'col-span-2 justify-self-center' : ''
                                        }`}
                                >
                                    <motion.div variants={itemVariants} className="h-24 w-24 flex items-center justify-center">
                                        {item.icon}
                                    </motion.div>
                                    <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex flex-col items-center gap-2">
                                        <motion.span variants={itemVariants} className="text-3xl">{item.title}</motion.span>
                                        <motion.span className="text-center" variants={itemVariants}>{item.desc}</motion.span>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
            <section ref={section2Ref} className="h-screen snap-start flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-20">
                    <div className="flex flex-col md:flex-row items-center gap-4 z-10">
                        <motion.div variants={itemVariants} className="flex flex-col justify-between md:justify-around w-96 h-44 md:h-52 gap-4">
                            <div className="flex flex-col gap-3">
                                <span className="text-3xl">Linguagem C</span>
                                <span>A linguagem mais utilizada para começar no mundo da programação</span>
                            </div>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, backgroundPosition: "100% 0%", transition: { duration: 0.4, ease: "easeOut" } }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => router.push("/conteudo")}
                                className="
                shadow-custom cursor-pointer px-6 py-2 rounded-md font-medium text-white
                bg-gradient-to-br from-[#003550] via-[#003550] to-[#3E7B9A]
                bg-[length:200%_100%] w-34 text-center
              "
                            >
                                Aprender C
                            </motion.div>
                        </motion.div>

                        <div className="bg-gray-300 w-[90%] md:w-1 h-1 md:h-56" />

                        <motion.div variants={itemVariants} className="shadow-2xl bg-gray-300 w-96 h-52 flex flex-col px-4 py-2 gap-2 rounded-md text-black">
                            <span className="text-2xl">Exemplo em C:</span>
                            <div className="flex w-full h-full">
                                <div className="bg-[#003550] w-2 h-full" />
                                <div className="bg-white w-full h-full px-4 py-2 font-mono text-sm flex flex-col">
                                    <span className="text-[#da42cd] block">#include &lt;stdio.h&gt;</span>
                                    <span className="text-[#0a1aff] block">int main() &#123;</span>
                                    <span className="text-[#cf5f33] block">&nbsp; printf("Olá, mundo!\\n");</span>
                                    <span className="text-[#177bcc] block">&nbsp; return 0;</span>
                                    <span className="text-[#0a1aff] block">&#125;</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </section>
        </main>
    );
}