import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        background: "var(--bos-bg-3)",
        color: "var(--bos-text-1)",
      }}
    >
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
