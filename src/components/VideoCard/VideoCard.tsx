import { getDiffDate } from '@/helpers';
import { Link } from 'react-router-dom';
import { ISuggest } from '../../models/suggest.interface';

import './styles/VideoCard.css';
/* max-w-[359.983px] */
export const VideoCard = ({ video }: { video: any }) => {
	return (
		<Link className='min-w-[244.233px] max-w-[359.983px]' to={`/watch/${video.id.videoId}`}>
			<div className="flex flex-col h-full">
				<div className='rounded-xl'>
					<img src={video.snippet.thumbnails.medium.url} alt="" className='w-full rounded-xl' />
				</div>

				<div className='flex items-start mt-2 space-x-2'>
					<p className='bg-red-600 p-5 rounded-full max-w-[40px] max-h-[40px] flex items-center justify-center'>{video.snippet.channelTitle.charAt(0)}</p>
					<div>
						<p className='title'>{video.snippet.title}</p> {/* titulo */}
						<p className='chanel'>{video.snippet.channelTitle}</p> {/* nombre del canal */}
						<div>
							<p>{ }</p> {/* vistas */}
							<p className='publish'> • {getDiffDate(video.snippet.publishTime)}</p> {/*  */}
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export const VideoCardFromWatch = ({ suggest }: { suggest: ISuggest }) => {
	return (
		<Link to={`/watch/${suggest.id.videoId}`} className='flex items-center space-x-2'>
			<img className='w-[168px] h-[94px] rounded-lg' src={suggest.snippet.thumbnails.medium.url} alt="" />
			<div>
				<p className='line-clamp-2'>{suggest.snippet.title}</p>
				<a href='#2'>{suggest.snippet.channelTitle}</a>
				<div className='flex'>
					<p>Vistas</p>
					<span>‧</span>
					<p>Fecha de subida</p>
				</div>
			</div>
		</Link>
	)
}

export const VideoCardChanel = ({ chanelV }: { chanelV: any }) => {
	return (
		<Link to={`/watch/${chanelV.id.videoId}`} className='w-full'>
			<div className="flex flex-col  h-full">
				<div className='rounded-xl'>
					<img src={chanelV.snippet.thumbnails.medium.url} alt="" className='w-full rounded-xl' />
				</div>

				<div className='flex items-start mt-2 space-x-2'>
					<div>
						<p className='title'>{chanelV.snippet.title}</p> {/* titulo */}
						<div className='flex publish'>
							<p>1 M de vistas</p> {/* vistas */}
							<p> • {getDiffDate(chanelV.snippet.publishTime)}</p> {/*  */}
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export const VideoCardSearch = ({ video }: { video: any }) => {
	return (
		<div className='flex space-x-4'>
			<Link className='image-video' to={`/watch/${video.id.videoId}`}><img src={video.snippet.thumbnails.medium.url} alt="" /></Link>
			<div className='flex flex-col basis-[55%]'>
				<Link className='info-video' to={`/watch/${video.id.videoId}`}>
					<p className='text-a line-clamp-2'>{video.snippet.title}</p>
					<p className='text-b'>8,205 vistas ‧ hace 3 meses</p>
				</Link>
				<Link to={`/chanel/${video.snippet.channelId}/featured`}>
					<div className='chanel-box'>
						<img className='' src="https://c4.wallpaperflare.com/wallpaper/432/201/184/anime-kantai-collection-tashkent-kancolle-wallpaper-preview.jpg" alt="" />
						<p className=''>{video.snippet.channelTitle}</p>
					</div>
				</Link>
				<p className='description line-clamp-2'>{video.snippet.description}</p>
			</div>
		</div>
	)
}