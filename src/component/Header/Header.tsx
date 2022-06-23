import React from 'react';
import NavBar from './NavBar';
import s from './Header.module.scss';
import Hero from './Hero';

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.header__wrapper}>
				<NavBar />
				<Hero />
			</div>
		</header>
	);
}

export default Header;
