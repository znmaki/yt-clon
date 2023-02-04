// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconNext, IconPrevious, IconSearch } from '../Icons';

// Import Swiper styles
import 'swiper/css';

import { useRef } from 'react';

import { optionSuggestion } from '@/utils';

import './styles/OptionSwiper.css';
import { NavLink } from 'react-router-dom';

const OptionSwiper = () => {
	const swiperRef = useRef<any>(null)
	return (
		<div className='w-full flex'>
			<button id="previousButton" onClick={() => swiperRef.current.swiper.slidePrev()} ><IconPrevious /></button>
			<Swiper
				slidesPerView={6}
				loop={true}
				loopFillGroupWithBlank={true}
				ref={swiperRef}
			>
				{optionSuggestion.map(({ name }, index) => (
					<SwiperSlide key={index}>{name}</SwiperSlide>
				))}
			</Swiper>
			<button id="nextButton" onClick={() => swiperRef.current.swiper.slideNext()} ><IconNext /></button>
		</div>
	)
}

export default OptionSwiper
