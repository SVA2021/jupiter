const BRAND = 'Нямушка';
const BONUS = ['мышь в подарок', ' мыши в подарок', ' мышей в подарок заказчик доволен',];
const WEIGHT = ['0,5', '2', '5'];
const QTY = ['10', '40', '100'];
const TASTE = ['с фуа-гра', 'с рыбой', 'с курой'];
const DETAILED = ['Печень утки разварная с артишоками.', 'Головы щучьи с чесноком да свежайшая сёмгушка.', 'Филе из цыплят с трюфелями в бульоне.'];

type TBonus = typeof BONUS[number];
type TWeight = typeof WEIGHT[number];

export type TQty = typeof QTY[number];
export type TTaste = typeof TASTE[number];
export type TDetailed = typeof DETAILED[number];
export type TDescription = 'Сказочное заморское яство' | 'Котэ не одобряет?';

export interface TCard {
	brand: typeof BRAND
	taste: TTaste
	weight: TWeight
	qty: TQty
	bonus: TBonus
	disabled: boolean
	detailed: TDetailed
}

//*********Fake data to result demonstration */

export const FakeDataDefault: TCard[] = [];
export const FakeDataDisabled: TCard[] = [];

const fillData = (array: TCard[], disabled: boolean): void => {
	for (let i = 0; i < 3; i++) {
		array.push({
			brand: BRAND,
			taste: TASTE[i],
			weight: WEIGHT[i],
			qty: QTY[i],
			bonus: BONUS[i],
			detailed: DETAILED[i],
			disabled: disabled,
		});
	}
}

fillData(FakeDataDefault, false);
fillData(FakeDataDisabled, true);