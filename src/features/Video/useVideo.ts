import axios from 'axios';
import { useAtom } from 'jotai';
import { videoAtom } from '../../entities/jotai';

const useVideo = () => {
  const openVideo = (url: string) => window.open(url, url);
  const [videoId, setVideoId] = useAtom(videoAtom);

  const URL = `https://twcommunity-server.store/view/youtube`;

  const getVideo = async () => {
    try {
      axios.get(URL)
        .then(response => {
          const video = response.data[0]?.id.videoId;
          setVideoId(video);
        })
        .catch(error => {
            console.log(error);
        });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return {
    openVideo,
    videoId,
    getVideo,
  };
};

export default useVideo;