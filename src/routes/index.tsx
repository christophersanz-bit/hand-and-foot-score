import { createFileRoute } from "@tanstack/react-router";
import { ScoreApp } from "@/components/score/ScoreApp";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <ScoreApp />;
}
