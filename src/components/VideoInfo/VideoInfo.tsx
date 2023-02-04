import { ButtonIconText, Comments, CommentHeader, ButtomChild, IconLike, IconDislike } from '@/components';
import './styles/VideoInfo.css';
import ReactPlayer from 'react-player/youtube';
import { getDiffDate } from '@/helpers';
import { Link } from 'react-router-dom';
import { IComments } from '@/models';
import { useState } from 'react';
import { log } from 'console';

const VideoInfo = ({ idVideo, videoD, comments }: any) => {
	const [mostrar, setMostrar] = useState(true)
	
	return (
		<div className='max-w-[80rem] space-y-2'>
			<div className='h-[15rem] sm:h-[35rem] tablet:h-[36.19rem] 2xl:h-[46.19rem]'>
				<ReactPlayer
					className='react-player'
					url={`https://www.youtube.com/watch?v=${idVideo}`}
					controls
					width="100%"
					height="100%"
					playing={true}
				/>
			</div>
			<p className='title'>{videoD.snippet.title}</p>
			<div className='space-y-2'>
				<div>
					<div className='flex items-center justify-between flex-wrap'>
						<div className='flex items-center space-x-4'>
							<Link to={`/chanel/${videoD.snippet.channelId}/featured`}>
								<img className='h-[40px] w-[40px] rounded-full' src="https://c4.wallpaperflare.com/wallpaper/432/201/184/anime-kantai-collection-tashkent-kancolle-wallpaper-preview.jpg" alt="" />
							</Link>
							<div>
								<Link to={`/chanel/${videoD.snippet.channelId}/featured	`}>{videoD.snippet.channelTitle}</Link>
								<p className='text-sm'>Numero de subscriptores</p>
							</div>
							<ButtonIconText text='Suscribirse' style={'!ml-8 !bg-white-1 text-black rounded-full'} />
						</div>
						<div className='flex space-x-4 '>
							<div className='flex'>
								<ButtomChild style={'relative border-after rounded-l-full hover:bg-gray-hover'}>
									<p className='flex items-center space-x-2'><IconLike style='inline-block' /> <span>{videoD.statistics.likeCount}</span></p>
								</ButtomChild>
								<ButtomChild style={'rounded-r-full hover:bg-gray-hover'}>
									<p><IconDislike /></p>
								</ButtomChild>
							</div>
							<ButtonIconText text='Compartir' style={'rounded-full hover:bg-gray-hover'} />
							<ButtonIconText text='Guardar' style={'rounded-full hover:bg-gray-hover'} />
							<ButtonIconText text='‧‧‧' style={'rounded-full hover:bg-gray-hover'} />
						</div>
					</div>
				</div>
				<div className='bg-light-gray-2 p-3 rounded-xl cursor-pointer hover:bg-gray-hover'
					onClick={() => { setMostrar(!mostrar) }}>
					<div className='flex space-x-4'>
						<p>{parseFloat(videoD.statistics.viewCount).toLocaleString("en-US")} vistas</p>
						<p>{getDiffDate(videoD.snippet.publishedAt)}</p>
					</div>
					<div className='w-auto'>
						<p className={`description ${mostrar ? 'line-clamp-1' : 'break-spaces'}`}>{videoD.snippet.description}</p>
					</div>
					<button>{`${mostrar ? 'Mostrar más' : 'Mostrar menos'}`}</button>
				</div>

				<div className='hidden tablet:block'>
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

			</div>
		</div>
	)
}

export default VideoInfo