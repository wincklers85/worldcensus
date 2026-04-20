# World Car Census Pro – static web app

Questa versione è progettata come front-end **chiaro, intuitivo e senza upload manuali**.

## Cosa fa ora
- tema chiaro e moderno
- selezione guidata **marca → modello → versione → anno/fase**
- ricerca federata simulata su più database
- risultati con:
  - totale per paese/database
  - percentuale sul totale combinato
  - allestimenti
  - colori
- nessun caricamento file richiesto
- gira come sito statico, quindi adatto a GitHub Pages

## Verità tecnica
Una ricerca mondiale **completamente live dal browser** non è realistica per tutti i paesi, perché:
- molti enti non espongono API pubbliche aperte al browser
- alcuni dataset hanno limiti di accesso o CORS
- il livello di dettaglio cambia molto da paese a paese
- colori e allestimenti spesso non sono disponibili in modo ufficiale

Per questo l'architettura corretta è:
1. **adattatori per paese**
2. **snapshot JSON normalizzati** pubblicati nel repo
3. quando possibile, **API pubbliche dirette**

## Fonti e direzione del progetto
- DVLA / DfT UK: statistiche veicoli e portale API DVLA
- ACI / PRA Italia: open data e open parco veicoli
- KBA Germania: statistiche veicoli
- SDES Francia: dati sul parc automobile e API Dido per dataset specifici

## Passo successivo consigliato
Per trasformarla in un prodotto vero:
- creare cartella `/data/` con snapshot ufficiali per paese
- aggiungere `providers/*.js` con parser dedicati
- costruire un indice unico tipo:

```json
{
  "brand": "Abarth",
  "model": "600e",
  "variant": "600e Turismo",
  "country": "Italia",
  "source": "ACI",
  "total": 217,
  "colors": [{"name":"Verde Acid","count":88}],
  "trims": [{"name":"Turismo","count":217}],
  "lastUpdated": "2026-04-20"
}
```

## Nota importante
I dati presenti in questa build sono **demo strutturate** per mostrare UX e logica.
La UI è pronta per essere collegata a dataset reali.
