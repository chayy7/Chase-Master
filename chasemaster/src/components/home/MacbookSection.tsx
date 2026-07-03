"use client";

import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function MacbookSection() {
  return (
    <div className="w-full bg-transparent py-20">
      <MacbookScroll
        title={
          <span className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Experience the <span className="text-primary">Super App</span>. <br /> Everything in one place.
          </span>
        }
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
        showGradient={true}
      />
    </div>
  );
}
