interface AboutUsComponentProps {
    image: string;
    title: string;
    description: string;
}

export const AboutUsComponent = ({ image, title, description }: AboutUsComponentProps) => {
    return (
        <div className="flex flex-col items-center w-80 h-70 justify-center p-4 shadow-lg my-5">
            <div className="relative rounded-full w-30 h-30 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="absolute w-[120px] h-[120px]"
                />
            </div>
            <p className="text-lg text-center max-w-2xl">
                {title}
            </p>
            <p className="text-lg text-center max-w-2xl">
                {description}
            </p>
        </div>
    )
}