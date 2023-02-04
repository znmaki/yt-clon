import { IOptions } from '@/models';

import { Fragment } from 'react';

import { IconUser } from '../Icons';

import './styles/Buttom.css';

export const ButtomOptions = ({ name, divider, Icon }: IOptions) => {
	return (
		<Fragment>
			<div className='option-with-icon cursor-pointer'>
				{Icon && <Icon />}
				<p className='text-sm'>{name}</p>
			</div>
			{divider && (
				<hr className='mx-[-15px] border-light-gray-2 !my-4' />
			)}
		</Fragment>
	)
}

export const ButtomLogin = () => {
	return (
		<button className='text-[#3EA6FF] flex space-x-2 py-1 px-2 border border-imput-border rounded-full'>
			<div>
				<IconUser />
			</div>
			<p>Acceder</p>
		</button>
	)
}

export const ButtonIconText = ({ text, style, icon }: { text: string; style?: string; icon?: JSX.Element }) => {
	return (
		<button
			className={`bg-light-gray-2 px-5 py-2 pr-4 ${style}`}
		>
			{icon}
			<p>{text}</p>
		</button>
	)
}

export const ButtomChild = ({ style, children }: { style?: string; children?: React.ReactElement | React.ReactElement[] }) => {
	return (
		<button
			className={`bg-light-gray-2 px-5 py-2 pr-4 ${style}`}
		>
			{children}
		</button>
	)
}