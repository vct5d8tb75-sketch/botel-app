# The Botel

Moderni webova aplikace pro verejnou prezentaci a managerske rizeni The Botel.

Projekt je samostatny a oddeleny od jinych repozitaru. Prvni verze obsahuje verejny web The Botel, interni admin dashboard, datove modely, mock data a pripravene integracni stuby pro budouci napojeni.

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
    nadacni-fond/
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
- `/nadacni-fond`
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

## Janova izolovaná pracovní kopie

- Pracovní větev: `jan-test`.
- Samostatný veřejný náhled: https://botel-jan-test.stejway-2335.chatgpt.site/
- Náhled je publikovaný snímek této větve. Po úpravách je nutné znovu sestavit statický export a publikovat jej na tento samostatný hosting; samotný push náhled neaktualizuje.
- Pro samostatný hosting sestavujte bez `GITHUB_PAGES=true` a bez `NEXT_PUBLIC_BASE_PATH` (náhled běží v kořeni domény).
- Hlavní větev a sdílený GitHub Pages web ponechte beze změn. Nespouštějte ručně workflow Pages z `jan-test`.
- Návrat změn řešte pull requestem `jan-test → main`, kontrolou aktuálních změn spolupracovníků, konfliktů a sestavení. Případné konflikty řešte v pracovní větvi a slučujte až po schválení.
- Při slučování přeneste jen schválené změny webu; instrukce pro Janův náhled v README a AGENTS.md patří do této pracovní větve.

## Spusteni

Verejna GitHub Pages adresa:

```txt
https://vct5d8tb75-sketch.github.io/botel-app/
```

## Upravy primo na GitHubu

Projekt je nastaveny tak, aby se dal upravovat bez lokalniho PC:

1. Otevri repozitar: `https://github.com/vct5d8tb75-sketch/botel-app`
2. Vyber soubor, ktery chces upravit.
3. Klikni na ikonu tuzky `Edit this file`.
4. Uloz zmenu pres `Commit changes` primo do vetve `jan-test`.
5. Změna zůstává ve větvi `jan-test`; samostatný náhled aktualizujte novým sestavením a publikováním.

Stav nasazeni je videt v zalozce `Actions`.

## GitHub Codespaces

Pro plnohodnotny vyvoj primo v GitHub cloudu je pripraveny `.devcontainer`.

Postup:

1. Otevri repozitar: `https://github.com/vct5d8tb75-sketch/botel-app`
2. Klikni na `Code`.
3. Otevri zalozku `Codespaces`.
4. Vyber `Create codespace on jan-test`.
5. Codespace automaticky nainstaluje zavislosti.
6. Spust `npm run dev`.

Nahled webu se otevre na portu `3000`. Upravy, commity a push pak probiha primo v GitHub cloudu, bez zavislosti na lokalnim Windows 11 PC.

## Prace pres Codex na iPhonu

Repozitar na GitHubu je hlavni zdroj pravdy. To znamena, ze dalsi upravy mohou jit primo pres Codex/GitHub i ve chvili, kdy lokalni PC neni zapnute.

Pri dalsi praci staci v Codexu zadat:

```txt
Uprav repozitar https://github.com/vct5d8tb75-sketch/botel-app
```

Po zmene ma Codex pracovat primo v GitHub repozitari, vytvorit commit pouze do `jan-test` a na vyžádání aktualizovat a ověřit samostatný náhled:

```txt
https://vct5d8tb75-sketch.github.io/botel-app/
```

Projektove instrukce pro Codex jsou ulozene v `AGENTS.md`.

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

1. Doplneni realnych fotografii a brandingu The Botel.
2. Napojeni rezervacniho formulare nebo rezervacniho widgetu.
3. Autentizace a role pro interni cast.
4. Realna integrace Previo a Dotykacka.
5. Reporting pro majitele a export do Money S3 nebo Pohody.
