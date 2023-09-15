import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/page2">Página 2</Link>
        </li>
      </ul>
    </header>
  );
}
