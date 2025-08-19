"use client"

import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query";

export const CLient = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.createAI.queryOptions({ text: "Anotion PREFETCH"}));

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}