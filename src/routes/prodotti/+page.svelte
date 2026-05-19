<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { categoryLabels, products } from '$lib/data/products';
	import type { ProductCategory } from '$lib/types';

	const categories: ProductCategory[] = ['viso', 'corpo', 'labbra', 'capelli'];
</script>

<svelte:head>
	<title>Prodotti — Erba &amp; Pelle</title>
</svelte:head>

<header class="page-intro">
	<h1>Prodotti naturali per la pelle</h1>
	<p>
		Linee per viso, corpo, labbra e capelli: estratti vegetali, oli e burri selezionati. Chiedi in
		negozio quale prodotto si adatta meglio alla tua pelle.
	</p>
</header>

{#each categories as cat (cat)}
	<section class="block" aria-labelledby={'cat-' + cat}>
		<h2 id={'cat-' + cat} class="cat-title">{categoryLabels[cat]}</h2>
		<div class="grid">
			{#each products.filter((p) => p.category === cat) as product (product.slug)}
				<ProductCard {product} />
			{/each}
		</div>
	</section>
{/each}

<style>
	.page-intro {
		max-width: 40rem;
		margin-bottom: var(--space-xl);
	}

	.page-intro h1 {
		margin: 0 0 var(--space-sm);
		font-size: clamp(1.5rem, 3vw, 2rem);
	}

	.page-intro p {
		margin: 0;
		color: var(--color-text-muted);
	}

	.block {
		margin-bottom: var(--space-xl);
	}

	.cat-title {
		margin: 0 0 var(--space-md);
		font-size: 1.25rem;
		padding-bottom: var(--space-sm);
		border-bottom: 2px solid var(--color-accent);
		display: inline-block;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
		gap: var(--space-md);
	}
</style>
