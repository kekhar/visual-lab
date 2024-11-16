"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { LiveMap } from '@liveblocks/client';
import Loader from '@/components/Loader';

export function Room({ children }: { children: ReactNode }) {
  return (
    // Вписываем свой public API key
    <LiveblocksProvider publicApiKey={"pk_prod_T83BHmdKICOwJ41eZJvaVTwkVVYeSkxFvTndEyfITVHcZQt37IBkt7IYONCacpwY"}>
      <RoomProvider id="my-room" 
      initialPresence={{
        cursor: null, cursorColor: null, editingText: null
      }}
      initialStorage={{
        canvasObjects: new LiveMap()
      }}
      >
        <ClientSideSuspense fallback={<Loader />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}