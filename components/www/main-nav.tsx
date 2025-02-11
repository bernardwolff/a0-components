"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { config } from "@/components/www/config";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden md:flex w-[148px]">
        <Link href="/" className="flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">
            {config.common.name}
          </span>
        </Link>
      </div>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components/user-profile"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
        <Link
          href="/example/dashboard"
          className={cn(
            "flex items-center gap-1 transition-colors hover:text-foreground/80",
            pathname?.startsWith("/example")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Live Example
        </Link>
      </nav>
    </>
  );
}
