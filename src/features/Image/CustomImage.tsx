interface CustomImageProps {
    alt: string;
    src: string;
}

const CustomImage = ({alt, src}: CustomImageProps) => {
    return (
        <>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />
            <div className="absolute top-0 left-0 w-full h-2/6 bg-gradient-to-b from-white dark:from-black to-transparent transition-all duration-500 ease-in-out" />
            <div className="absolute inset-y-0 left-0 w-2/6 bg-gradient-to-r from-white dark:from-black to-transparent transition-all duration-500 ease-in-out" />
            <div className="absolute bottom-0 left-0 w-full h-2/6 bg-gradient-to-b from-transparent to-white dark:to-black transition-all duration-500 ease-in-out" />
        </>
    )
}

export default CustomImage;