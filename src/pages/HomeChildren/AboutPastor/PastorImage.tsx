interface PastorImageProps {
    profileImg: string;
}

const PastorImage = ({profileImg}: PastorImageProps) => {
    return (
        <>
            <img
                src={profileImg}
                alt="목사님 프로필 이미지"
                className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-2/6 bg-gradient-to-b from-white dark:from-black to-transparent" />
            <div className="absolute inset-y-0 left-0 w-2/6 bg-gradient-to-r from-white dark:from-black to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-2/6 bg-gradient-to-b from-transparent to-white dark:to-black" />
        </>
    )
}

export default PastorImage;