import React from 'react';
import s from './Header.module.scss';

const Hero = () => {
	return (
		<div className={s.hero}>
			<h1 className={s.hero__title}>portfolio</h1>
			<p className={s.hero__subtitle}>Agency provides a full service range including technical skills, design, business understanding.</p>
		</div>
	);
}

export default Hero;
