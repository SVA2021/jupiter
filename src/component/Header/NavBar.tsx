import s from './Header.module.scss';
import Logo from './Logo';
import NavMenu from './NavMenu';

const NavBar = () => {
	return (
		<div className={s.navbar}>
			<Logo />
			<NavMenu />
			<button className={s.navbar__contactBtn}>contact</button>
		</div>
	);
}

export default NavBar;
