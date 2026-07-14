import { listDecks } from "@/lib/content";
import { ReviewSessionClient } from "./ReviewSessionClient";

export function generateStaticParams() {
  return listDecks().map((deck) => ({ deckId: deck.id }));
}

export default async function DeckReviewPage({
  params,
}: {
  params: Promise<{ deckId: string }>;
}) {
  const { deckId } = await params;
  return <ReviewSessionClient deckId={deckId} />;
}
