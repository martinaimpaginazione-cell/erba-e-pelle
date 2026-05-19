<script lang="ts">
	import { resolve } from '$app/paths';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/products';

	const inEvidenza = products.slice(0, 3);

	const wildPlants = [
		{
			src: '/images/wild-herbs.jpg',
			alt: 'Erbe selvatiche raccolte in prato',
			caption: 'Erbe di campo'
		},
		{
			src: '/images/wild-flowers.jpg',
			alt: 'Fiori selvatici in un prato fiorito',
			caption: 'Fioriture spontanee'
		},
		{
			src: '/images/forest-plants.jpg',
			alt: 'Vegetazione rigogliosa in un bosco',
			caption: 'Piante del sottobosco'
		}
	] as const;
</script>

<svelte:head>
	<title>Erba &amp; Pelle — cosmetica naturale dall&apos;erboristeria</title>
</svelte:head>

<section class="hero">
	<div class="hero-content">
		<p class="eyebrow">Erboristeria · cosmetica vegetale</p>
		<h1>Cura della pelle con ciò che cresce in natura</h1>
		<p class="lead">
			Formulazioni semplici, ingredienti di origine vegetale e consigli chiari. Niente promesse
			impossibili: solo qualità e rispetto per la pelle.
		</p>
		<p class="actions">
			<a class="btn btn-primary" href={resolve('/prodotti')}>Vedi i prodotti</a>
			<a class="btn btn-ghost" href={resolve('/chi-siamo')}>La nostra filosofia</a>
		</p>
	</div>
	<figure class="hero-visual">
		<img
			src="/images/hero-wild-meadow.jpg"
			alt="Prato verde con piante selvatiche e luce naturale"
			width="1400"
			height="900"
			fetchpriority="high"
		/>
	</figure>
</section>

<section class="nature" aria-labelledby="nature-title">
	<div class="nature-intro">
		<h2 id="nature-title">Dalla natura selvatica</h2>
		<p>
			Ci ispiriamo a ciò che cresce spontaneo: erbe di prato, fioriture di stagione e il verde del
			sottobosco. Materie prime scelte con rispetto per l&apos;ambiente e per la pelle.
		</p>
	</div>
	<ul class="nature-grid">
		{#each wildPlants as plant (plant.src)}
			<li>
				<figure class="plant-card">
					<img src={plant.src} alt={plant.alt} width="800" height="600" loading="lazy" />
					<figcaption>{plant.caption}</figcaption>
				</figure>
			</li>
		{/each}
	</ul>
</section>

<section class="band" aria-labelledby="valori-title">
	<h2 id="valori-title" class="sr-only">Perché sceglierci</h2>
	<ul class="pillars">
		<li>
			<strong>Piante</strong>
			<span>Estratti, oli e burri scelti con cura.</span>
		</li>
		<li>
			<strong>Trasparenza</strong>
			<span>INCI leggibile e spiegato in negozio.</span>
		</li>
		<li>
			<strong>Delicatezza</strong>
			<span>Formule pensate per uso quotidiano.</span>
		</li>
	</ul>
</section>

<section class="featured" aria-labelledby="featured-title">
	<div class="section-head">
		<h2 id="featured-title">In evidenza</h2>
		<a href={resolve('/prodotti')}>Catalogo completo</a>
	</div>
	<div class="grid">
		{#each inEvidenza as product (product.slug)}
			<ProductCard {product} />
		{/each}
	</div>
</section>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-lg);
		margin-bottom: var(--space-xl);
		align-items: center;
	}

	@media (min-width: 52rem) {
		.hero {
			grid-template-columns: 1fr 1.1fr;
			gap: var(--space-xl);
		}
	}

	.hero-content {
		max-width: 38rem;
	}

	.hero-visual {
		margin: 0;
		border-radius: var(--radius);
		overflow: hidden;
		box-shadow: var(--shadow);
		border: 1px solid var(--color-border);
	}

	.hero-visual img {
		width: 100%;
		height: 100%;
		min-height: 16rem;
		object-fit: cover;
		aspect-ratio: 4 / 3;
	}

	.eyebrow {
		margin: 0 0 var(--space-sm);
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-accent);
	}

	h1 {
		margin: 0 0 var(--space-md);
		font-size: clamp(1.75rem, 4vw, 2.35rem);
	}

	.lead {
		margin: 0 0 var(--space-lg);
		font-size: 1.1rem;
		color: var(--color-text-muted);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
		margin: 0;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.65rem 1.25rem;
		border-radius: var(--radius);
		font-weight: 600;
		text-decoration: none;
		font-size: 0.95rem;
		border: 2px solid transparent;
	}

	.btn-primary {
		background: var(--color-accent);
		color: #fff;
		border-color: var(--color-accent);
	}

	.btn-primary:hover {
		background: var(--color-accent-hover);
		border-color: var(--color-accent-hover);
		color: #fff;
	}

	.btn-ghost {
		background: transparent;
		color: var(--color-accent);
		border-color: var(--color-border);
	}

	.btn-ghost:hover {
		border-color: var(--color-accent);
		background: var(--color-highlight);
	}

	.nature {
		margin-bottom: var(--space-xl);
	}

	.nature-intro {
		max-width: 42rem;
		margin-bottom: var(--space-lg);
	}

	.nature-intro h2 {
		margin: 0 0 var(--space-sm);
		font-size: 1.5rem;
		color: var(--color-accent);
	}

	.nature-intro p {
		margin: 0;
		color: var(--color-text-muted);
		font-size: 1.05rem;
	}

	.nature-grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: var(--space-md);
	}

	.plant-card {
		margin: 0;
		border-radius: var(--radius);
		overflow: hidden;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow);
	}

	.plant-card img {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}

	.plant-card figcaption {
		padding: var(--space-sm) var(--space-md);
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--color-accent);
		background: var(--color-highlight);
	}

	.band {
		background: var(--color-highlight);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: var(--space-lg);
		margin-bottom: var(--space-xl);
	}

	.pillars {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		gap: var(--space-lg);
	}

	.pillars li {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.pillars strong {
		font-family: var(--font-display);
		font-size: 1.1rem;
		color: var(--color-text);
	}

	.pillars span {
		font-size: 0.95rem;
		color: var(--color-text-muted);
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.section-head {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--space-sm);
		margin-bottom: var(--space-md);
	}

	.section-head h2 {
		margin: 0;
		font-size: 1.5rem;
	}

	.section-head a {
		font-weight: 600;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
		gap: var(--space-md);
	}
</style>
