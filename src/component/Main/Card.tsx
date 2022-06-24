import classNames from 'classnames';
import { TCard } from '../../data/data';
import s from './Main.module.scss';

const Card = (props: TCard) => {

	const { id, category, content, imageSrc, selected, handleBtnClick, handleCardClick } = props;
	
	let src = `rgba(92, 32, 0, 0.32) url(${process.env.PUBLIC_URL + imageSrc})`;

	return (
		<div onClick={handleCardClick}
			style={{ background: src, }}
			className={classNames(s.card, { [s.selected]: (selected === id) })}>
			<button onClick={handleBtnClick} className={s.card__btn}>
				{category}
			</button>
			<p className={s.card__title}>{content}</p>
		</div>
	);
}

export default Card;
