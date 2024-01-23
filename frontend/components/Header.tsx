import Link from "next/link";
import React from "react";

export default function Header() {
  const links = [
    { content: "Sequelize", href: "/" },
    { content: "File System", href: "/page2" },
    { content: "Mantine Design", href: "/login" },
  ];

  return (
    <header>
      <nav>
        {links.map(({ content, href }, index) => (
          <Link
            key={index}
            className="underline text-blue-700 mr-2"
            href={href}
          >
            {content}
          </Link>
        ))}
      </nav>
    </header>
  );
}
