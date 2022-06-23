import React from 'react';
import { ReactComponent as LogoIcon } from '../../img/logo.svg';
import s from './Header.module.scss';

const Logo = () => {
	return (
		<div className={s.logo}>
			<LogoIcon className={s.logo__icon}/>
			<span className={s.logo__content}>Agency</span>
		</div>
	);
}

export default Logo;
