import TheWordChurchImage from "@/assets/images/twc_front_door.jpeg"

const ChurchImages = () => {
    return (
        <>
            <img
                src={TheWordChurchImage}
                alt="교회 이미지"
                className="w-full h-screen object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-2/6 bg-gradient-to-b from-white dark:from-black to-transparent" />
            <div className="absolute inset-y-0 left-0 w-2/6 bg-gradient-to-r from-white dark:from-black to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-b from-transparent to-white dark:to-black" />
        </>
    )
}

export default ChurchImages;