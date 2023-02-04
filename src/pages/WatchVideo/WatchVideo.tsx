import { CommentHeader, Comments, VideoCardFromWatch, VideoInfo } from '@/components';
import { VideoContext } from '@/context/Videos';
import { fetchWatchVideo } from '@/helpers';
import { IComments } from '@/models';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './styles/WatchVideo.css';

const WatchVideo = () => {
	const { getVideoDetailC, videoD, changeHidden, hidden, getVideoSelectC, suggest, comments } = useContext(VideoContext)
	const { id } = useParams()

	fetchWatchVideo({ getVideoSelectC, getVideoDetailC, id, changeHidden, hidden, videoD })

	return (
		<>
			{videoD && (
				<div className='watch-video'>
					<div className='watch-video__left'>
						<VideoInfo idVideo={id} videoD={videoD} comments={comments} />
					</div>
					<div className='watch-video__mid'>
						<CommentHeader>
							{comments ? (
								comments.map((comment: IComments) => (
									<Comments comment={comment} />
								))
							) : (
								<p className='text-center'><span>Los comentarios están desactivados.</span><a className='text-[#3ea6ff]' href='https://support.google.com/youtube/answer/9706180?hl=es-419' target="_blank"> Más información</a></p>
							)}
						</CommentHeader>
					</div>
					<div className='watch-video__right'>
						{suggest && (
							suggest.map(sug => (
								<VideoCardFromWatch suggest={sug} />
							))
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default WatchVideo