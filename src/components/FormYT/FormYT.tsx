import './styles/FormYT.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconMicro, IconSearch } from '../Icons';
export interface FormYTInterface { }

const FormYT = () => {
	const [query, setQuery] = useState('')
	const router = useNavigate();

	const handleChange = (e: any) => {
		setQuery(e.target.value);
	}

	const handleSearch = (e: any) => {
		e.preventDefault();
		router(`/search/${query}`)
	}

	return (
		<>
			<form className='formyt flex' onSubmit={handleSearch}>
				<input onChange={handleChange} className='input-yt' type="text" placeholder='Buscar' />
			</form>
			<button onClick={handleSearch} className='bg-imput-btn border border-imput-border rounded-r-full px-5'><IconSearch /></button>
			<div className='flex pl-2'>
				<button className='bg-imput-micro rounded-full px-2'><IconMicro /></button>
			</div>
		</>
	)
}

export default FormYT
