// components/NavLink.js
"use client";
import Link from "next/link";
import { useEffect } from "react";

const NavLink = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};

export default NavLink;
