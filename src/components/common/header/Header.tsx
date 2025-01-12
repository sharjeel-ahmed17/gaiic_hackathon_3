// import Link from "next/link";
// import { Heart, Search, ShoppingCart } from "lucide-react";
// import { Input } from "@/components/ui/input";
// const Header = () => {
//   return (
//     <div className="flex justify-between">
//       {/* left */}
//       <div>logo</div>
//       {/* mid */}
//       <div>
//         <ul className="flex gap-3">
//           <li>
//             <Link href="#">home</Link>
//           </li>
//           <li>
//             <Link href="#">contact</Link>
//           </li>
//           <li>
//             <Link href="#">about</Link>
//           </li>
//           <li>
//             <Link href="#">signup</Link>
//           </li>
//         </ul>
//       </div>
//       {/* right */}
//       <div className="flex gap-3 items-center">
//         <div className="relative">
          
//         <Input type="search" />
//         <Search className="absolute right-1 top-1"/>
//         </div>

//         <Heart />
//         <ShoppingCart />
//       </div>
//     </div>
//   );
// };

// export default Header;

"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Heart, Search, ShoppingCart, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">Exclusive</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        <Link href="#">Home</Link>
        <Link href="#">Contact</Link>
        <Link href="#">About</Link>
        <Link href="#">Signup</Link>
      </nav>

      {/* Right Section */}
      <div className="flex gap-3 items-center">
        {/* Search Input */}
        <div className="relative hidden md:block">
          <Input type="search" placeholder="Search..." />
          <Search className="absolute right-2 top-2 text-gray-500" />
        </div>

        {/* Icons */}
        <Heart />
        <ShoppingCart />

        {/* Hamburger Menu */}
        <Menu
          className="block md:hidden cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
          <div className="fixed top-0 left-0 h-full w-2/3 bg-white p-6 z-20">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={toggleSidebar}
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="#" onClick={toggleSidebar}>
                Home
              </Link>
              <Link href="#" onClick={toggleSidebar}>
                Contact
              </Link>
              <Link href="#" onClick={toggleSidebar}>
                About
              </Link>
              <Link href="#" onClick={toggleSidebar}>
                Signup
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
