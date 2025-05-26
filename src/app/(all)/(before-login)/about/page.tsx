'use client'

import { useRef } from 'react';
import { AboutUsComponent } from '@/src/components/AboutUsComponent';
import { motion } from 'framer-motion';

const team = [
    { image: './photos/amanda.png', title: 'Amanda Specht', description: 'Conteudista' },
    { image: './photos/ana.png', title: 'Ana Paula Fussi Vicini', description: 'Conteudista' },
    { image: './photos/feliped.png', title: 'Felipe Deretti', description: 'Programador' },
    { image: './photos/felipet.png', title: 'Felipe Tomio Maciel', description: 'Programador' },
    { image: './photos/marquardt.png', title: 'Gabriel Fellipe Marquardt', description: 'Programador' },
    { image: './photos/guilherme.png', title: 'Guilherme Ferraz da Silva', description: 'Programador' },
    { image: './photos/mario.png', title: 'Mário Augusto Bussarello Volpato', description: 'Programador' },
    { image: './photos/natan.png', title: 'Natan Felipe Valente', description: 'Programador' },
    { image: './photos/laura.png', title: 'Laura Meier', description: 'Conteudista' },
    { image: './photos/leticia.png', title: 'Letícia Stefani Waismann', description: 'Conteudista' },
    { image: './photos/kauane.png', title: 'Kauane Vitória Souza Mota', description: 'Conteudista' },
];

export default function AboutPage() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const scrollOffset = 300;

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -scrollOffset, behavior: 'smooth' });
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <motion.main
            className="relative w-full flex flex-col items-center justify-center h-full overflow-hidden gap-4"
            initial="hidden"
            animate="show"
            variants={containerVariants}
        >
            <motion.span
                className='text-4xl'
                variants={itemVariants}
            >
                Membros da equipe
            </motion.span>
            <motion.div
                className='w-[80%] flex items-center gap-4'
                variants={itemVariants}
            >
                <button
                    onClick={handlePrev}
                    className="cursor-pointer flex items-center justify-center rounded-full shadow w-10 h-10"
                >
                    <span className='pi pi-arrow-left'></span>
                </button>
                <div className="overflow-hidden relative w-full">
                    <div
                        ref={sliderRef}
                        className="grid grid-rows-2 grid-flow-col gap-4 overflow-hidden no-scrollbar snap-x snap-mandatory px-4"
                        style={{ gridAutoColumns: 'min-content' }}
                    >
                        {team.map((member) => (
                            <motion.div
                                key={member.title}
                                className="snap-center flex-shrink-0"
                                variants={itemVariants}
                            >
                                <AboutUsComponent
                                    image={member.image}
                                    title={member.title}
                                    description={member.description}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={handleNext}
                    className="cursor-pointer flex items-center justify-center  rounded-full shadow w-10 h-10"
                >
                    <span className='pi pi-arrow-right'></span>
                </button>
            </motion.div>
        </motion.main>
    );
}
