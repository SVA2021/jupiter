import { TCard, TData } from '../../data/data';
import Card from './Card';
import s from './Main.module.scss';

const Gallery = (props: { items: TData[]} ) => {
	const items = props;
	return (
		<div className={s.gallery}>
			{/* {items.map((item: TData) =>
				<Card {...item}
					handleBtnClick={console.log(`item = ${item.id}`)}
					handleCardClick={console.log(`item = ${item.id}`)}
					selectedID={4}
				/>
			)} */}
		</div>
	);
}

export default Gallery;
