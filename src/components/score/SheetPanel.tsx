import {
  BOOK_ROWS,
  HANDS,
  POINTS,
  formatPts,
  handTotal,
  linePoints,
  runningTotal,
  subtotal,
  type Game,
} from "@/lib/scoring";
import { TeamMark } from "./Suits";
import { cn } from "@/lib/utils";

export function SheetPanel({ game }: { game: Game }) {
  return (
    <div className="flex flex-col gap-4">
      {HANDS.map((hand) => {
        const a = game.scores[hand.index][0];
        const b = game.scores[hand.index][1];
        const pa = linePoints(a, hand);
        const pb = linePoints(b, hand);
        const rows: { label: string; a: number; b: number; muted?: boolean }[] = [
          { label: "Perfect Draw", a: pa.perfectDraw, b: pb.perfectDraw },
          { label: "Going Out", a: pa.goingOut, b: pb.goingOut },
          ...BOOK_ROWS.map((row) => ({
            label: row.label,
            a: pa[row.key],
            b: pb[row.key],
          })),
          { label: "Negative Pts", a: pa.negativePts, b: pb.negativePts },
          { label: "Subtotal", a: subtotal(a, hand), b: subtotal(b, hand), muted: true },
          { label: "Card Count", a: pa.cardCount, b: pb.cardCount },
          { label: "Hand Total", a: handTotal(a, hand), b: handTotal(b, hand) },
          {
            label: "Total points",
            a: runningTotal(game, 0, hand.index),
            b: runningTotal(game, 1, hand.index),
          },
        ];
        return (
          <section
            key={hand.index}
            className="overflow-hidden rounded-lg border border-paper-line bg-paper"
          >
            <header className="flex items-end justify-between gap-3 border-b border-paper-line bg-paper-inset px-4 py-3">
              <div>
                <h3 className="font-display text-lg font-semibold">{hand.label}</h3>
                <p className="text-xs text-paper-muted">
                  Open {hand.open} · Out {hand.goingOut} · {hand.cleanNeed} clean &{" "}
                  {hand.dirtyNeed} dirty
                </p>
              </div>
              <p className="text-xs text-paper-muted">Deal {hand.perfectDrawCards}</p>
            </header>
            <div className="grid grid-cols-[1fr_5.5rem_5.5rem] px-4 pt-3 text-xs font-medium tracking-wide text-paper-muted uppercase">
              <span />
              <span className="flex items-center justify-end gap-1">
                <TeamMark team={0} />
                <span className="truncate">{game.teamNames[0]}</span>
              </span>
              <span className="flex items-center justify-end gap-1">
                <TeamMark team={1} />
                <span className="truncate">{game.teamNames[1]}</span>
              </span>
            </div>
            <div className="px-4 pb-2">
              {rows.map((row, i) => {
                const strong = row.label === "Hand Total" || row.label === "Total points";
                return (
                  <div
                    key={row.label}
                    className={cn(
                      "grid grid-cols-[1fr_5.5rem_5.5rem] items-baseline py-2",
                      i < rows.length - 1 && "border-b border-paper-line",
                      strong && "mt-1",
                    )}
                  >
                    <span
                      className={cn(
                        "text-sm",
                        strong ? "font-semibold" : row.muted ? "text-paper-muted" : "",
                      )}
                    >
                      {row.label}
                    </span>
                    <Pts value={row.a} strong={strong} />
                    <Pts value={row.b} strong={strong} />
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
      <p className="px-1 text-xs text-paper-muted">
        Clean books {POINTS.cleanBook} · Dirty {POINTS.dirtyBook} · 7's{" "}
        {POINTS.bookOf7s} · Black 3's {POINTS.bookOfBlack3s} · Perfect draw{" "}
        {POINTS.perfectDraw}
      </p>
    </div>
  );
}

function Pts({ value, strong }: { value: number; strong?: boolean }) {
  return (
    <span
      className={cn(
        "text-right tabular-nums",
        strong ? "font-display text-lg font-semibold" : "text-sm",
        value < 0 ? "text-destructive" : value === 0 && !strong ? "text-paper-muted" : "",
      )}
    >
      {formatPts(value)}
    </span>
  );
}
