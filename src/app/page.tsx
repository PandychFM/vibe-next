import { Suspense } from "react";

import { getQueryClient, trpc } from "@/trpc/server";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { CLient } from "./client";


const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({ text: "Anotnio PREFETCH" }))

  return ( 
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
        <CLient />
      </Suspense>
    </HydrationBoundary>
   );
}
 
export default Page;