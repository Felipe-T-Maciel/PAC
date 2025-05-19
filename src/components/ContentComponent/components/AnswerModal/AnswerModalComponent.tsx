interface ContentComponentProps {
    correct: boolean,
    answer: string,
}

export const AnswerModalComponent = ({ correct, answer }: ContentComponentProps) => {
    return (
        <>
            {
                correct ? (
                    <div className=" bg-green-600 w-full h-full shadow-2xl flex flex-col justify-center items-center rounded-lg overflow-hidden">
                        <div className="flex justify-center items-center gap-10">
                            <span className="text-2xl pi pi-check-circle"></span>
                            <span className="text-xl">Resposta correta, Parabéns!</span>
                        </div>
                    </div>

                ) : (
                    <div className=" bg-red-600 w-full h-full shadow-2xl flex flex-col justify-center items-center rounded-lg overflow-hidden">
                        <div className="flex justify-center items-center gap-10">
                            <span className="text-2xl pi pi-times-circle"></span>
                            <span className="text-xl">Resposta incorreta, tente novamente.</span>
                        </div>
                    </div>
                )
            }
        </>
    )
}