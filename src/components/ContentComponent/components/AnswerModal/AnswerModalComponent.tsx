import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ContentComponentProps {
    correct: boolean
    correctAnswer?: string
}

export const AnswerModalComponent = ({ correct, correctAnswer }: ContentComponentProps) => {
    return (
        <>
            {
                correct ? (
                    <div className="text-white bg-green-600 w-full h-full shadow-2xl flex flex-col justify-center items-center rounded-lg overflow-hidden">
                        <div className="flex justify-center items-center gap-10">
                            <span className="text-2xl pi pi-check-circle"></span>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {correctAnswer && `Parabéns, a resposta correta é: ${correctAnswer}`}
                            </ReactMarkdown>
                        </div>
                    </div>
                ) : (
                    <div className="text-white bg-red-600 w-full h-full shadow-2xl flex flex-col justify-center items-center rounded-lg overflow-hidden">
                        <div className="flex justify-center items-center gap-10">
                            <span className="text-2xl pi pi-times-circle"></span>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {correctAnswer && `A resposta correta é: ${correctAnswer}`}
                            </ReactMarkdown>
                        </div>
                    </div>
                )
            }
        </>
    )
}