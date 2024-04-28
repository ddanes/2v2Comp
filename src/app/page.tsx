"use client";
import { useEffect, useState } from "react";
import EventGrid from "./components/EventGrid";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <EventGrid />
    </main>
  );
}
