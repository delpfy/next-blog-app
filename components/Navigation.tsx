"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link href={link.href} key={link.label} style={isActive ? { color: "yellow" } : {}}>
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
