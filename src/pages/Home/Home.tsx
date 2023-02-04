import { OptionSwiper, VideoCard } from '@/components';
import { VideoContext } from '@/context/Videos';
import { fetchHome } from '@/helpers';
import { useContext } from 'react';

import './styles/Home.css';

const Home = () => {
  const { getVideosC, videos, changeHidden, hidden } = useContext(VideoContext)
  console.log(import.meta.env.VITE_API_KEY);
  
  fetchHome({ getVideosC, changeHidden, hidden })
  {/* {video.type == 'video' && <p>{video.type}</p>} */ }
  return (

    /* basis-[87.4%] px-[50px] */
    <>
      <OptionSwiper />
      <div className='home-container'>
        {videos.map((video: any, index: any) => (
          video.id.kind === 'youtube#video' && (
            <VideoCard key={index} video={video} />
          )
        ))}
      </div>
    </>
  )
}

export default Home