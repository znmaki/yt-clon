import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '@/components';

import { Chanel, Home, Search, WatchVideo } from '@/pages';

import './styles/Navigation.css';

export interface NavigationInterface { }
//  window.navigator.onLine *true or false*
const Navigation = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/home' replace />} />

				<Route path='/' element={<Layout />}>
					<Route path='home' element={<Home />} />
					<Route path='search/:query' element={<Search />} />
					<Route path='explore/:type' element={' explorar categoria'} />
					<Route path='chanel/:id/:type' element={<Chanel />} />
					<Route path='watch/:id' element={<WatchVideo />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Navigation
