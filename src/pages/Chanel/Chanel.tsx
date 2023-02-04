import { ButtonIconText, IconSearch, VideoCardChanel } from '@/components';
import { VideoContext } from '@/context/Videos';
import { useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './styles/Chanel.css';
import { fetchChanel } from '../../helpers/fetchType';
export interface ChanelInterface { }

const Chanel = () => {
	const { getChanelDetailC, getVideoChanelC, changeHidden, hidden, chanel, chanelVideo } = useContext(VideoContext)
	const { id } = useParams()

	fetchChanel({ getChanelDetailC, getVideoChanelC, id, changeHidden, hidden })

	return (
		<div>
			{chanel.length !== 0 && (
				<>
					{
						chanel.brandingSettings.image ? (
							<div className='w-full h-[269px]'>
								<img className='object-cover w-full h-full' src={chanel.brandingSettings.image.bannerExternalUrl} alt="" />
							</div>
						) : (<></>)
					}

					<div className='header-chanel'>
						<div className='flex items-center'>
							<img className='h-[80px] w-[80px] rounded-full' src={chanel.snippet.thumbnails.high.url} alt="" />
							<div>
								<h1 className='text-2xl'>{chanel.brandingSettings.channel.title}</h1>
								<p>{chanel.snippet.customUrl}</p>
								<p className='text-sm'>{parseFloat(chanel.statistics.subscriberCount).toLocaleString("en-US")} suscriptores</p>
							</div>
						</div>
						<div className='flex items-center'>
							<ButtonIconText text='Suscribirse' style={'bg-white-1 text-black rounded-full'} />
						</div>
					</div>
					<div className='container-options'>
						<div className='divider-line'></div>
						<ul className='list-options'>
							<li><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to={'/chanel/authorDisplayName/featured'}>página principal</NavLink></li>
							<li><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to={'/chanel/authorDisplayName/videos'}>videos</NavLink></li>
							<li><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to={'/chanel/authorDisplayName/playlists'}>lista de reproducción</NavLink></li>
							<li><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to={'/chanel/authorDisplayName/community'}>comunidad</NavLink></li>
							<li><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to={'/chanel/authorDisplayName/channels'}>canales</NavLink></li>
							<li><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to={'/chanel/authorDisplayName/about'}>información</NavLink></li>
							<li><NavLink to={'#'}><IconSearch /></NavLink></li>
						</ul>
					</div>
					<div className='videos-container'>
						<h2>Videos</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 tablet:grid-cols-4 tablet:gap-x-4 tablet:gap-y-10'>
							{
								chanelVideo.map((chanelV: any) => (
									chanelV.id.kind === 'youtube#video' && (
										<VideoCardChanel chanelV={chanelV} />
									)
								))
							}

						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default Chanel