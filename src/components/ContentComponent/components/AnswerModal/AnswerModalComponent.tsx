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
                    <div className="text-white bg-green-600 w-full h-fit min-h-40 max-h-70 py-5 shadow-2xl flex flex-col justify-center items-center rounded-lg overflow-hidden">
                        <div className=" flex flex-col justify-center items-center gap-10">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl pi pi-check-circle"></span>
                                <span>A resposta é:</span>
                            </div>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}
                                components={{
                                    pre: ({ node, ...props }) => (
                                        <pre className="rounded-md font-alata text-center w-full flex justify-center" {...props} />
                                    ),

                                    p: ({ node, children, ...props }) => (

                                        <p className="break-words whitespace-pre-wrap font-alata"
                                            {...props}
                                        >
                                            {children}
                                        </p>
                                    ),
                                    img: ({ node, ...props }) => (
                                        <img className="rounded-xl max-w-full" {...props} />
                                    ),

                                    code: ({ node, ...props }) => (
                                        <code className=" block font-alata text-white rounded-xl" {...props} />
                                    ),

                                    strong: ({ node, ...props }) => (
                                        <strong className="font-bold">{props.children}</strong>
                                    ),
                                }}
                            >
                                {correctAnswer}
                            </ReactMarkdown>
                        </div>
                    </div>
                ) : (
                    <div className="text-white bg-red-600 w-full h-fit min-h-40 max-h-70  shadow-2xl flex flex-col justify-center items-center rounded-lg overflow-hidden">
                        <div className="flex justify-center items-center gap-10">
                            <span className="text-2xl pi pi-times-circle"></span>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}
                                components={{
                                    pre: ({ node, ...props }) => (
                                        <pre className="w-full h-full rounded-md font-alata text-center flex justify-center" {...props} />
                                    ),

                                    p: ({ node, children, ...props }) => (
                                        <p className="break-words whitespace-pre-wrap font-alata "
                                            {...props}
                                        >
                                            {children}
                                        </p>
                                    ),

                                    img: ({ node, ...props }) => (
                                        <img className="rounded-xl max-w-full" {...props} />
                                    ),

                                    code: ({ node, ...props }) => (
                                        <code className="w-full h-full block font-alata rounded-xl" {...props} />
                                    ),
                                    strong: ({ node, ...props }) => (
                                        <strong className="font-bold">{props.children}</strong>
                                    ),
                                }}
                            >
                                {correctAnswer && `
    A resposta correta é: ${correctAnswer}
`}
                            </ReactMarkdown>
                        </div>
                    </div>
                )
            }
        </>
    )
}