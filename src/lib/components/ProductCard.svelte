<script lang="ts">
	import type { Product } from '$lib/types';
	import { categoryLabels } from '$lib/data/products';

	let { product }: { product: Product } = $props();
</script>

<article class="card">
	<p class="category">{categoryLabels[product.category]}</p>
	<h3 class="title">{product.name}</h3>
	<p class="plant"><span class="plant-label">Pianta</span> {product.plant}</p>
	<p class="short">{product.short}</p>
</article>

<style>
	.card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: var(--space-md);
		box-shadow: var(--shadow);
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.category {
		margin: 0;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-accent);
		font-weight: 600;
	}

	.title {
		margin: 0;
		font-size: 1.15rem;
	}

	.plant {
		margin: 0;
		font-size: 0.9rem;
		color: var(--color-text-muted);
		font-style: italic;
	}

	.plant-label {
		font-style: normal;
		font-weight: 600;
		color: var(--color-text);
	}

	.short {
		margin: 0;
		margin-top: auto;
		padding-top: var(--space-sm);
		font-size: 0.95rem;
		color: var(--color-text-muted);
	}
</style>
