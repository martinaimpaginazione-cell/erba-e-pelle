<svelte:head>
	<title>Contatti — Erba &amp; Pelle</title>
</svelte:head>

<article class="article">
	<h1>Contatti</h1>
	<p class="lead">
		Sostituisci i dati qui sotto con indirizzo, orari e canali reali della tua erboristeria. Il
		layout resta lo stesso: chiaro e facile da aggiornare.
	</p>

	<dl class="details">
		<dt>Indirizzo</dt>
		<dd>Via Esempio 12 — 00100 Città</dd>

		<dt>Orari</dt>
		<dd>Lun–Sab 9:30–13:00 / 15:30–19:30</dd>

		<dt>Telefono</dt>
		<dd><a href="tel:+390000000000">+39 000 000 0000</a></dd>

		<dt>Email</dt>
		<dd><a href="mailto:info@erbaepelle.it">info@erbaepelle.it</a></dd>
	</dl>
</article>

<style>
	.article {
		max-width: 32rem;
	}

	h1 {
		margin: 0 0 var(--space-md);
		font-size: clamp(1.5rem, 3vw, 2rem);
	}

	.lead {
		margin: 0 0 var(--space-lg);
		color: var(--color-text-muted);
		line-height: 1.65;
	}

	.details {
		margin: 0;
		display: grid;
		grid-template-columns: auto 1fr;
		gap: var(--space-sm) var(--space-lg);
		align-items: baseline;
	}

	dt {
		margin: 0;
		font-weight: 700;
		color: var(--color-text);
	}

	dd {
		margin: 0;
		color: var(--color-text-muted);
	}
</style>
