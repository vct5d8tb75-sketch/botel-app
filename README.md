# Botel App

Moderni webova aplikace pro verejnou prezentaci a managerske rizeni botelu.

Projekt je samostatny a oddeleny od jinych repozitaru. Prvni verze obsahuje verejny web, interni admin dashboard, datove modely, mock data a pripravene integracni stuby pro budouci napojeni.

## Stack

- Next.js
- React
- TypeScript
- App Router
- CSS design system
- lucide-react icons

## Struktura

```txt
src/
  app/
    page.tsx
    pokoje/
    restaurace/
    terasa/
    eventy/
    galerie/
    kontakt/
    admin/
    api/mock/
  components/
  lib/
    integrations/
    mock-data.ts
    models.ts
```

## Verejne stranky

- `/`
- `/pokoje`
- `/restaurace`
- `/terasa`
- `/eventy`
- `/galerie`
- `/kontakt`

## Interni cast

- `/admin`
- `/admin/rezervace`
- `/admin/obsazenost`
- `/admin/housekeeping`
- `/admin/udrzba`
- `/admin/restaurace`
- `/admin/finance`
- `/admin/reporty`
- `/admin/nastaveni`

## Spusteni

Verejna GitHub Pages adresa:

```txt
https://vct5d8tb75-sketch.github.io/botel-app/
```

Lokalni vyvoj:

```bash
npm install
npm run dev
```

Vyvojovy server bude standardne dostupny na:

```txt
http://localhost:3000
```

Kontrola typu:

```bash
npm run typecheck
```

Build:

```bash
npm run build
```

## Integrace

Skutecne API zatim nejsou implementovana. V projektu jsou pripravena mista pro pozdejsi doplneni:

- Previo: `src/lib/integrations/previo.ts`
- Dotykacka: `src/lib/integrations/dotykacka.ts`
- Money S3 / Pohoda: `src/lib/integrations/accounting.ts`
- Konfigurace env promennych: `.env.example`

Realne klice patri pouze do `.env.local`, nikdy do Gitu.

## Mock data

Ukazkova data jsou v `src/lib/mock-data.ts` a pokryvaji:

- pokoje
- rezervace
- hosty
- housekeeping
- udrzbu
- trzby
- sklad / bar

API mock endpoint:

```txt
/api/mock
```

Poznamka: GitHub Pages je staticky hosting, proto realna API vrstva bude pozdeji bezet samostatne nebo v hostingu s podporou serverless funkci.

## Dalsi kroky

1. Doplneni realnych fotografii botelu a brandingu.
2. Napojeni rezervacniho formulare nebo rezervacniho widgetu.
3. Autentizace a role pro interni cast.
4. Realna integrace Previo a Dotykacka.
5. Reporting pro majitele a export do Money S3 nebo Pohody.
