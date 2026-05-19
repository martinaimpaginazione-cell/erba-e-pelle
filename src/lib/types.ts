export type ProductCategory = 'viso' | 'corpo' | 'labbra' | 'capelli';

export type Product = {
	slug: string;
	name: string;
	short: string;
	plant: string;
	category: ProductCategory;
};
