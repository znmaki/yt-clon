import { OptionSwiper, VideoCard } from '@/components';
import { VideoContext } from '@/context/Videos';
import { fetchHome } from '@/helpers';
import { useContext } from 'react';

import './styles/Home.css';

const Home = () => {
  const { getVideosC, videos, changeHidden, hidden } = useContext(VideoContext)
  
  fetchHome({ getVideosC, changeHidden, hidden })

  return (
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