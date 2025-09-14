import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { MdMenu, MdClose } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 w-full z-50 bg-brandDark text-white h-20 font-varela shadow-lg"
      >
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="container mx-auto flex justify-between items-center h-full"
        >
          {/* logo section */}
          <div>
            <a href="#home" className="text-xl font-bold">
              PLAYING /{" "}
              <span className="font-extralight text-white/70">MARKET</span>
            </a>
          </div>

          {/* menu section (desktop) */}
          <nav className="hidden md:flex">
            <ul className="flex gap-8 items-center">
              <Link to="Home" smooth={true} duration={700}>
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link to="Categories" smooth={true} duration={700}>
                <li className="cursor-pointer">Categories</li>
              </Link>
              <Link to="About" smooth={true} duration={700}>
                <li className="cursor-pointer">About</li>
              </Link>
              <Link to="Blog" smooth={true} duration={700}>
                <li className="cursor-pointer">Blog</li>
              </Link>
              <Link to="Contact" smooth={true} duration={700}>
                <li className="cursor-pointer">Contact</li>
              </Link>
              <button className="text-xl ps-4">
                <SlEarphones />
              </button>
            </ul>
          </nav>

          {/* hamburger button (mobile) */}
          <div className="md:hidden text-4xl cursor-pointer">
            {isOpen ? (
              <MdClose onClick={() => setIsOpen(false)} />
            ) : (
              <MdMenu onClick={() => setIsOpen(true)} />
            )}
          </div>
        </motion.nav>

        {/* mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brandDark text-white mt-2 px-6 py-4 rounded-lg shadow-lg"
          >
            <ul className="flex flex-col gap-4">
              <Link to="Home" smooth={true} duration={700} onClick={() => setIsOpen(false)}>
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link to="Categories" smooth={true} duration={700} onClick={() => setIsOpen(false)}>
                <li className="cursor-pointer">Categories</li>
              </Link>
              <Link to="About" smooth={true} duration={700} onClick={() => setIsOpen(false)}>
                <li className="cursor-pointer">About</li>
              </Link>
              <Link to="Blog" smooth={true} duration={700} onClick={() => setIsOpen(false)}>
                <li className="cursor-pointer">Blog</li>
              </Link>
              <Link to="Contact" smooth={true} duration={700} onClick={() => setIsOpen(false)}>
                <li className="cursor-pointer">Contact</li>
              </Link>
<Link to="/Audio" href="#">
              <button className="text-xl">
                <SlEarphones />
              </button>
</Link>
            </ul>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Navbar;

