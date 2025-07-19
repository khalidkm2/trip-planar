import  { useState } from "react";
import logo from "../assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger menu icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-4 shadow flex justify-between items-center relative">
      {/* Logo */}
      <Link to={"/"} className="flex items-center gap-2 group">
        <img src={logo} alt="Logo" className="h-8 sm:h-10" />
        <span className="text-xl sm:text-2xl font-bold text-gray-800 ">
          Plan<span className="text-blue-500">Go</span>{" "}
          <span className="  text-gray-500 font-medium">AI</span>
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-3">
        <Link to={"/create-trip"}>
          <Button
            variant="secondary"
            className="cursor-pointer hover:bg-gray-300"
          >
            Create Trip
          </Button>
        </Link>
        <Link to={"/trip-details"}>
          <Button
            variant="secondary"
            className="cursor-pointer hover:bg-gray-300"
          >
            Trip Details
          </Button>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-4 mt-2 bg-white border rounded-md shadow-md flex flex-col gap-2 p-4 md:hidden z-50">
          <Link to={"/create-trip"} onClick={() => setMenuOpen(false)}>
            <Button
              variant="secondary"
              className="w-full cursor-pointer hover:bg-gray-300"
            >
              Create Trip
            </Button>
          </Link>
          <Link to={"/trip-details"} onClick={() => setMenuOpen(false)}>
            <Button
              variant="secondary"
              className="w-full cursor-pointer hover:bg-gray-300"
            >
              Trip Details
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
