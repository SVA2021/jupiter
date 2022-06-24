import { useState } from 'react';
import { CATEGORY, } from '../../data/data';
import s from './Main.module.scss';

const OPTIONS = CATEGORY;

const Menu = (props: any) => {

	
	const { handleClick, handleChange } = props;
	return (
		<div className={s.menu}>
			<ul className={s.menu__desktop}>
				{OPTIONS.map((item, index) =>
					<li key={Math.random().toString()} className={s.menu__item}
						onClick={handleClick}>
						{item}
					</li>
				)}
			</ul>
			<select className={s.menu__mobile} onChange={handleChange}>
				{OPTIONS.map((item, index) =>
					<option key={Math.random().toString()} className={s.menu__item} value={index}>{item}</option>
				)}
			</select>
		</div>
	);
}

export default Menu;
