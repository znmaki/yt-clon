import { Fragment, useContext } from 'react';

import { ButtomOptions, IconFilter } from '@/components';

import { options } from '@/utils';

import './styles/Header.css';
import { VideoContext } from '@/context/Videos';

export interface HeaderInterface { }

const Header = () => {
  const { hidden } = useContext(VideoContext)

  return (
    <div className={`header ${hidden ? 'hidden' : ''}`}>
      <div className='fixed inset-0 top-[3.1rem] px-[15px] w-[14.5rem] overflow-y-scroll scroll-style scroll-app mt-5'>
        {options.map(({ name, divider, Icon }, index) => (
          <ButtomOptions key={index} name={name} divider={divider} Icon={Icon} />
        ))}
        <IconFilter />
      </div>
    </div>
  )
}

export default Header
