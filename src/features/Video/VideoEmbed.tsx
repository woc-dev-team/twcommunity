import { VideoEmbedProps } from "../../entities/interface";
import ReactPlayer from "react-player";

const VideoEmbed = ({ url, className }: VideoEmbedProps) => {
    return (
        <div className={className}>
            <ReactPlayer 
                url={`${url}&t=3000`}
                width="100%"
                height="254px"
                playing  // 자동 재생
                muted  // 음소거
                controls={false}  // 재생 컨트롤 표시
            />
        </div>
    )
};

export default VideoEmbed;