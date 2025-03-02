interface CustomImageProps {
    alt: string;
    src: string;
    gradation: string;
    className: string;
}

const CustomImage = ({alt, src, gradation, className}: CustomImageProps) => {
    return (
        <>
            <img
                src={src}
                alt={alt}
                className={className}
            />
            {gradation.includes("t") && <div className="absolute top-0 left-0 w-full h-2/6 bg-gradient-to-b from-white dark:from-black to-transparent transition-all duration-500 ease-in-out" />}
            {gradation.includes("l") && <div className="absolute inset-y-0 left-0 w-2/6 bg-gradient-to-r from-white dark:from-black to-transparent transition-all duration-500 ease-in-out" />}
            {gradation.includes("r") && <div className="absolute inset-y-0 right-0 w-2/6 bg-gradient-to-l from-white dark:from-black to-transparent transition-all duration-500 ease-in-out" />}
            {gradation.includes("b") && <div className="absolute bottom-0 left-0 w-full h-2/6 bg-gradient-to-b from-transparent to-white dark:to-black transition-all duration-500 ease-in-out" />}
        </>
    )
}

export default CustomImage;