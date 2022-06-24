import classNames from 'classnames';
import React, { useState } from 'react';
import { CATEGORY, FAKEDATA, fillData, filterByCategory, TCategory, TData } from '../../data/data';
import Card from './Card';
import s from './Main.module.scss';

const Main = () => {

	const [selected, setSelected] = useState<number | null>(null);
	const [actualCategory, setCategory] = useState<TCategory>('show all');
	const BASE_DATA = FAKEDATA;
	const [ACTUAL_DATA, setActualData] = useState<TData[]>(BASE_DATA);

	let items: TData[] = filterByCategory(ACTUAL_DATA, actualCategory);

	const handleSelected = (id: number): void => {
		(id === selected) ? setSelected(null) : setSelected(id);
	}

	const setNewData = () => {
		console.log('aldkgk');

		let result: TData[] = [];
		fillData(result, 9);
		setActualData([...ACTUAL_DATA, ...result])
		// setActualData([...result])
	};

	return (
		<main className={s.main}>
			<div className={s.main__wrapper}>
				<div className={s.menu}>
					<ul className={s.menu__desktop}>
						{CATEGORY.map((item, index) =>
							<li key={Math.random().toString()}
								className={classNames(s.menu__item, { [s.menu__item__active]: (item === actualCategory) })}
								onClick={() => setCategory(item)}>
								{item}
							</li>
						)}
					</ul>
					<select className={s.menu__mobile}
						value={actualCategory}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
							setCategory(CATEGORY[Number(e.currentTarget.value)]);
						}
						}>
						{CATEGORY.map((item: TCategory, index: number) =>
							<option key={Math.random().toString()} className={s.menu__item} value={index}>{item}</option>
						)}
					</select>
				</div>
				<div className={s.gallery}>
					{items.map((item: TData) =>
						<Card {...item}
							key={Math.random().toString()}
							selected={selected}
							handleBtnClick={(e: React.MouseEvent<HTMLButtonElement>) => {
								e.stopPropagation();
								setCategory(item.category);
							}}
							handleCardClick={() => handleSelected(item.id)}
						/>
					)}
				</div>
				<button onClick={() => setNewData()} className={s.loadBtn}>load more</button>
			</div>
		</main>
	);
}

export default Main;
