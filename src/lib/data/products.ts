import type { Product } from '$lib/types';

export const products: Product[] = [
	{
		slug: 'crema-calendula',
		name: 'Crema viso alla calendula',
		short: 'Lenitiva e idratante, ideale per pelli sensibili.',
		plant: 'Calendula officinalis',
		category: 'viso'
	},
	{
		slug: 'siero-iperico',
		name: "Siero viso all'iperico",
		short: "Texture leggera, aiuta a uniformare l'incarnato.",
		plant: 'Hypericum perforatum',
		category: 'viso'
	},
	{
		slug: 'tonico-amamelide',
		name: "Tonico viso all'amamelide",
		short: 'Rinfrescante dopo la detersione, senza alcol.',
		plant: 'Hamamelis virginiana',
		category: 'viso'
	},
	{
		slug: 'olio-corpo-lavanda',
		name: 'Olio corpo lavanda e mandorle',
		short: 'Massaggio e idratazione profonda dopo il bagno.',
		plant: 'Lavandula angustifolia',
		category: 'corpo'
	},
	{
		slug: 'balsamo-rosa-canina',
		name: 'Balsamo labbra rosa canina',
		short: 'Protezione quotidiana con cere vegetali.',
		plant: 'Rosa canina',
		category: 'labbra'
	},
	{
		slug: 'maschera-argilla-te',
		name: 'Maschera argilla verde e tè verde',
		short: 'Rituale settimanale per pelli miste.',
		plant: 'Camellia sinensis',
		category: 'viso'
	},
	{
		slug: 'shampoo-ortica',
		name: "Shampoo delicato all'ortica",
		short: 'Detergenza dolce per cuoio capelluto sensibile.',
		plant: 'Urtica dioica',
		category: 'capelli'
	},
	{
		slug: 'burro-karite',
		name: 'Burro di karité puro',
		short: 'Multiuso per zone molto secche.',
		plant: 'Vitellaria paradoxa',
		category: 'corpo'
	}
];

export const categoryLabels: Record<Product['category'], string> = {
	viso: 'Viso',
	corpo: 'Corpo',
	labbra: 'Labbra',
	capelli: 'Capelli'
};
