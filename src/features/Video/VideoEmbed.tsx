import { VideoEmbedProps } from "../../entities/interface";
// import ReactPlayer from "react-player";

const VideoEmbed = ({ url, className }: VideoEmbedProps) => {
    return (
        <div className={className}>
            <iframe 
                src={url}
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '8px' }}
            />
        </div>
    )
};

export default VideoEmbed;