"use client";

import Image from "next/image";
import Link from "next/link";
import logoMobile from "@/assets/icons/logo_mobile.svg";
import logo from "@/assets/icons/logo.svg";
import search from "@/assets/icons/search.svg";
import Menu from "@/components/Header/Menu";
import Button from "@/components/Button/Button";
import { NAV_LINKS } from "@/data/index";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      router.push(`/articles?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/articles?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className=" w-full sticky top-0 z-50 bg-background">
      <div className="w-full max-w-[1440px] m-auto">
        <div className="relative flex items-center justify-center h-20 lg:hidden">
          <Link href="/">
            <Image
              src={logoMobile}
              alt="Logo"
              className="cursor-pointer relative z-50"
            />
          </Link>
          <Menu links={NAV_LINKS} />
        </div>
        <div className="hidden  w-full items-center justify-between lg:flex h-20 px-20">
          <div className="flex items-center justify-center gap-12 text-lg ">
            <Link href="/">
              <Image src={logo} alt="Logo" className="cursor-pointer" />
            </Link>
            <nav>
              <ul className="flex gap-6">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href + link.key}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center justify-center gap-8 text-base">
            <div className="relative flex items-center">
              <input
                type="text"
                aria-label="Search articles"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-64 h-14 rounded-[3.75rem] px-8 placeholder:text-black"
                placeholder="Search"
              />
              <div htmlFor="input" className="absolute right-8 cursor-pointer">
                <Image onClick={handleSearch} src={search} alt="Search" />
              </div>
            </div>
            <Button
              onClick={handleSearch}
              label="¡Hablemos!"
              className="px-8 py-4"
            ></Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
