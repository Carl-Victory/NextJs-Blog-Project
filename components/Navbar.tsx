"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Users", href: "/users" },
    { name: "Sign Up", href: "/signup" },
  ];

  return (
    <nav className="bg-gray-800 shadow mb-6">
      <div className="max-w-6xl mx-auto px-4 py-3 flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium ${
              pathname === link.href
                ? "text-blue-600"
                : "text-white hover:text-blue-600"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
