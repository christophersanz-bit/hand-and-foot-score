# Hand & Foot Score

Mobile-first scoring app for Hand and Foot (5-deck partnership rules).

Track four hands for two teams: Perfect Draw, clean and dirty books, books of 7s and black 3s, going out, card count, and negatives. Subtotals and running totals are calculated for you.

Games are stored on the device (`localStorage`). No account required.

## Scoring

| Item | Points |
| --- | --- |
| Perfect Draw | 100 |
| Clean book | 500 |
| Dirty book | 300 |
| Book of 7s | 1,500 |
| Book of black 3s | 2,000 |
| Going out | 100 |
| Joker | 50 |
| 2 / Ace | 20 |
| King–8 | 10 |
| 7–4 / black 3 | 5 |
| Red 3 | −500 |

Hand requirements follow the printed sheet:

- Hand 1 — open 90, go out 180, 1 clean + 1 dirty
- Hand 2 — open 120, go out 240, 2 + 2
- Hand 3 — open 150, go out 300, 3 + 3
- Hand 4 — open 180, go out 400, 4 + 4

Only one team can go out in a hand.

## Run locally

Requires Node.js 22+.

```bash
npm install
npm run dev
```

The app listens on port 8080.

```bash
npm run build
npm run typecheck
```

## Stack

React 19, TanStack Start / Router, Tailwind CSS v4, Zustand.

## License

Private project. Use and change as you like.
