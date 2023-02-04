import { Link, Outlet } from 'react-router-dom';

import { ButtomLogin, FormYT, Header, IconBurgerBar, IconPointBar, IconYTLogo } from '@/components';

import './styles/Layout.css';
import { useContext } from 'react';
import { VideoContext } from '@/context/Videos';

export interface LayoutInterface { }

const Layout = () => {
  const { hidden } = useContext(VideoContext)



  return (
    <div>
      <div className='flex justify-between px-6 pt-2 pb-2 sticky top-0 bg-primary h-[56px]'>
        <div className='flex items-center space-x-5'>
          <IconBurgerBar />
          <div className='flex space-x-1'>
            <Link to={'/home'}><IconYTLogo /></Link>
            <p className='text-[10px] mt-[-10px] text-light-gray'>PE</p>
          </div>
        </div>
        <div className='basis-[728px] shrink pl-[2.8rem] flex'>
          <FormYT />
        </div>
        <div className='flex items-center space-x-4'>
          <IconPointBar />
          <ButtomLogin />
        </div>
      </div>
      <div className={hidden ? 'block' : 'flex justify-center'}>
        <Header />

        <div className='2xl:basis-[87.4%] tablet:basis-[82%] tablet:overflow-y-scroll xl:overflow-hidden'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
