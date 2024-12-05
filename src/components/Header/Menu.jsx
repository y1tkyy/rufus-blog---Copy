"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button/Button";
import menu from "@/assets/icons/menu.svg";
import search from "@/assets/icons/search.svg";

const Menu = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <div className="absolute w-full flex justify-end">
      <Image
        src={menu}
        alt="Menu"
        onClick={toggleMenu}
        className="relative cursor-pointer z-50 mr-6"
      />
      {isMenuOpen && (
        <nav className="absolute z-50 bg-background top-14 right-0 w-full">
          <ul className="flex flex-col items-center space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href + link.key}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col px-16 space-y-2 py-4 w-full items-center">
            <div className="relative flex items-center w-full max-w-sm">
              <input
                type="text"
                className="w-full h-14 rounded-[3.75rem] px-8 placeholder:text-black"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div htmlFor="input" className="absolute right-8 cursor-pointer">
                <Image src={search} alt="Search" onClick={handleSearch} />
              </div>
            </div>

            <Button
              onClick={handleSearch}
              label="¡Hablemos!"
              className="px-8 py-4 max-w-sm w-full"
            ></Button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Menu;
