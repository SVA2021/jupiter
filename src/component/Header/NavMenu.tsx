import s from './Header.module.scss';

const NavMenu = () => {
	return (
		<nav className={s.menu}>
			<ul className={s.menu__body}>
				<li className={s.menu__item}>about</li>
				<li className={s.menu__item}>services</li>
				<li className={s.menu__item}>pricing</li>
				<li className={s.menu__item}>blog</li>
			</ul>
		</nav>
	);
}

export default NavMenu;
