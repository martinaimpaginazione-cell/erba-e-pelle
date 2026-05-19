<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let { children } = $props();

	const nav = [
		{ href: '/', label: 'Home' },
		{ href: '/prodotti', label: 'Prodotti' },
		{ href: '/chi-siamo', label: 'Chi siamo' },
		{ href: '/contatti', label: 'Contatti' }
	] as const;

	function navActive(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta
		name="description"
		content="Cosmetica naturale per la pelle, ricavata dalle piante. Erboristeria: formulazioni delicate e materie prime vegetali."
	/>
</svelte:head>

<div class="shell">
	<a class="skip" href="#contenuto">Vai al contenuto</a>

	<header class="header">
		<div class="header-inner">
			<a class="brand" href={resolve('/')}>
				<span class="brand-title">Erba &amp; Pelle</span>
				<span class="brand-tag">cosmetica vegetale</span>
			</a>
			<nav class="nav" aria-label="Principale">
				<ul>
					{#each nav as item (item.href)}
						<li>
							<a
								href={resolve(item.href)}
								class:active={navActive(item.href)}
								data-sveltekit-preload-data="hover"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</header>

	<main id="contenuto" class="main">
		{@render children()}
	</main>

	<footer class="footer">
		<div class="footer-inner">
			<p class="footer-brand"><strong>Erba &amp; Pelle</strong> — erboristeria</p>
			<p class="footer-note">
				I prodotti cosmetici non sono farmaci. In caso di patologie cutanee rivolgiti al medico o al
				farmacista.
			</p>
			<p class="footer-copy">
				© {new Date().getFullYear()} — formulazioni a base vegetale, senza claim terapeutici.
			</p>
		</div>
	</footer>
</div>

<style>
	.skip {
		position: absolute;
		left: -9999px;
		z-index: 999;
		padding: var(--space-sm) var(--space-md);
		background: var(--color-surface);
		color: var(--color-accent);
		font-weight: 600;
		border-radius: var(--radius);
	}

	.skip:focus {
		left: var(--space-md);
		top: var(--space-md);
	}

	.shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.header {
		background: var(--color-surface);
		border-bottom: 1px solid var(--color-border);
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.header-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: var(--space-md) var(--space-lg);
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--space-md);
	}

	.brand {
		text-decoration: none;
		color: inherit;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.brand:hover .brand-title {
		color: var(--color-accent);
	}

	.brand-title {
		font-family: var(--font-display);
		font-size: 1.35rem;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.brand-tag {
		font-size: 0.8rem;
		color: var(--color-text-muted);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm) var(--space-lg);
	}

	.nav a {
		text-decoration: none;
		font-weight: 600;
		color: var(--color-text-muted);
		padding: var(--space-xs) 0;
		border-bottom: 2px solid transparent;
	}

	.nav a:hover {
		color: var(--color-accent);
	}

	.nav a.active {
		color: var(--color-accent);
		border-bottom-color: var(--color-accent);
	}

	.main {
		flex: 1;
		width: 100%;
		max-width: var(--max-width);
		margin: 0 auto;
		padding: var(--space-xl) var(--space-lg);
	}

	.footer {
		background: var(--color-highlight);
		border-top: 1px solid var(--color-border);
		margin-top: auto;
	}

	.footer-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: var(--space-lg);
		font-size: 0.9rem;
		color: var(--color-text-muted);
	}

	.footer-brand {
		margin: 0 0 var(--space-sm);
		color: var(--color-text);
	}

	.footer-note {
		margin: 0 0 var(--space-sm);
		max-width: 40rem;
	}

	.footer-copy {
		margin: 0;
		font-size: 0.85rem;
	}
</style>
