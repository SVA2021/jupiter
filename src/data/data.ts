export const CATEGORY = ['show all', 'design', 'branding', 'illustration', 'motion',] as const;

const CONTENT = ['SOFA', 'KeyBoard', 'Work Media', 'DDDone', 'Abstract', 'HandP', 'Architect', 'Calc', 'Sport']
export type TCategory = typeof CATEGORY[number];

export type TData = {
	id: number
	category: TCategory
	content: string
	imageSrc: string
}

export type TCard = TData & {
	selected: number | null
	handleBtnClick: React.MouseEventHandler<HTMLButtonElement>
	handleCardClick: React.MouseEventHandler<HTMLDivElement>
}

export const FAKEDATA: TData[] = [];

const checkCategory = (id: number): TCategory => {
	let div = id % 9;

	if (div === 0 || div === 4 || div === 7) return CATEGORY[1];
	if (div === 1 || div === 5 || div === 8) return CATEGORY[2];
	if (div === 2) return CATEGORY[3];
	if (div === 3 || div === 6) return CATEGORY[4];
	return CATEGORY[0];
}

export const fillData = (array: TData[], qty: number): void => {
	for (let i = 0; i < qty; i++) {
		array.push({
			id:  +((Math.random() + i) * 1000000000).toFixed(0),
			category: checkCategory(i),
			content: CONTENT[i % 9],
			imageSrc: `/img/Bitmap_${i % 9}.png`,
		});
	}
}

fillData(FAKEDATA, 9);

export const filterByCategory = (array: TData[], category: TCategory): TData[] => {
	let result :TData[] = [];
	if (category === 'show all') return array;
	result = array.filter((item) => item.category === category);
	return result;
}