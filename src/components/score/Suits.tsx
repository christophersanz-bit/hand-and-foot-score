import { Club, Diamond, Heart, Spade } from "lucide-react";
import { cn } from "@/lib/utils";

export function SuitRow({ className, size = "md" }: { className?: string; size?: "sm" | "md" }) {
  const icon = size === "sm" ? "size-3.5" : "size-4";
  return (
    <div className={cn("flex items-center gap-2 text-felt-muted", className)} aria-hidden>
      <Spade className={cn(icon, "fill-current text-felt-fg")} />
      <Heart className={cn(icon, "fill-current text-suit-red")} />
      <Club className={cn(icon, "fill-current text-felt-fg")} />
      <Diamond className={cn(icon, "fill-current text-suit-red")} />
    </div>
  );
}

export function TeamMark({ team, className }: { team: 0 | 1; className?: string }) {
  const Icon = team === 0 ? Heart : Spade;
  return (
    <Icon
      className={cn(
        "size-3.5 fill-current",
        team === 0 ? "text-suit-red" : "text-paper-fg",
        className,
      )}
      aria-hidden
    />
  );
}
