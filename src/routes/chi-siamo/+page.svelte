<svelte:head>
	<title>Chi siamo — Erba &amp; Pelle</title>
</svelte:head>

<article class="article">
	<h1>La nostra erboristeria</h1>
	<p class="lead">
		Crediamo che la cosmetica quotidiana possa essere sobria, onesta e radicata nel mondo vegetale:
		meno ingredienti superflui, più attenzione a origine e tollerabilità.
	</p>

	<h2>Cosa trovi da noi</h2>
	<ul>
		<li>Referenze per viso, corpo, labbra e capelli con estratti e oli vegetali.</li>
		<li>Consigli personalizzati in negozio in base al tipo di pelle e alle tue abitudini.</li>
		<li>Preferenza per formulazioni che rispettano la barriera cutanea e l’ambiente.</li>
	</ul>

	<h2>Il nome del negozio</h2>
	<p>
		Qui abbiamo usato <strong>Erba &amp; Pelle</strong> come esempio: sostituiscilo con il nome
		della tua attività nel layout (<code>+layout.svelte</code>) e nelle pagine, così il sito
		rispecchia la tua identità.
	</p>
</article>

<style>
	.article {
		max-width: 38rem;
	}

	h1 {
		margin: 0 0 var(--space-md);
		font-size: clamp(1.5rem, 3vw, 2rem);
	}

	.lead {
		margin: 0 0 var(--space-lg);
		font-size: 1.1rem;
		color: var(--color-text-muted);
	}

	h2 {
		margin: var(--space-lg) 0 var(--space-sm);
		font-size: 1.2rem;
	}

	ul {
		margin: 0 0 var(--space-md);
		padding-left: 1.25rem;
		color: var(--color-text-muted);
	}

	li {
		margin-bottom: var(--space-xs);
	}

	p {
		margin: 0 0 var(--space-md);
		color: var(--color-text-muted);
		line-height: 1.65;
	}

	code {
		font-size: 0.9em;
		background: var(--color-highlight);
		padding: 0.1em 0.35em;
		border-radius: 4px;
		border: 1px solid var(--color-border);
	}
</style>
