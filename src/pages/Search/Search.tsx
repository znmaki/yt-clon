import { VideoContext } from '@/context/Videos';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './styles/Search.css';
import svgError from '../../assets/svg-gobbler.svg'
import { IconFilter, VideoCardSearch } from '@/components';
import { fechtSearch } from '@/helpers';

const Search = () => {
	const { getVideosC, videos, changeHidden, hidden } = useContext(VideoContext)
	const { query } = useParams()

	fechtSearch({ getVideosC, query, changeHidden, hidden, videos })
	
	return (
		<div className='basis-[87.4%] flex justify-center'>
			<div className='max-w-[80rem] mt-6 flex justify-center'>
				<div className='max-w-[68.5rem] flex flex-col space-y-4'>
					<div className='space-y-2'>
						<p className='flex space-x-2 items-center cursor-pointer'><IconFilter /> <span className='text-sm'>Filtros</span></p>
						<hr />
					</div>
					{videos.length === 0 ? (
						<div className='flex flex-col items-center mt-60 space-y-5'>
							<img className='w-[400px] h-[200px]' src={svgError} alt="" />
							<h2 className='text-2xl'>No se encontraron resultados</h2>
							<p className='text-sm'>Intenta usar otras palabras clave o quitar los filtros de búsqueda</p>
						</div>
					) : (
						videos.map((video: any) => (
							<VideoCardSearch video={video} />
						))
					)}
				</div>
			</div>
		</div>
	)
}

export default Search
