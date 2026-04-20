# World Car Census Pro

Web app statica per GitHub Pages con:

- tema chiaro e interfaccia pulita
- selezione guidata marca -> modello -> versione -> generazione
- catalogo marche/modelli caricato automaticamente dal browser
- filtro colore dopo la ricerca
- collegamenti rapidi a pagine informative del veicolo
- struttura pronta per risultati per paese / database

## Come usarla

1. Apri `index.html`
2. Seleziona una marca
3. Seleziona un modello
4. Scegli una versione, se disponibile
5. Premi `Cerca`
6. Applica facoltativamente il filtro colore

## Cosa fa davvero questa build

- usa un catalogo live di marche e modelli per non richiedere file caricati a mano
- include dati dettagliati indicizzati per alcuni modelli esempio
- mostra la struttura finale completa per arrivare a un archivio serio paese per paese

## Passo successivo serio

Per renderla davvero completa bisogna aggiungere snapshot normalizzati per i registri nazionali. La UI è già pronta: basta aggiungere nuovi provider e i relativi file JSON.
