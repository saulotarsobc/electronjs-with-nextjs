import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <br />
        <Link href="/page2">Página 2</Link>
      </nav>
    </header>
  );
}
