"use client";

import React, { useContext, useState } from "react";
import { CursorContext } from "./CursorContext";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

// components
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Socials from "./Socials";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

// CATATAN: Karena Anda menggunakan 'boxicons', pastikan Anda mengimpor CSS
// ini di file tata letak/root Anda, atau tambahkan di sini jika Anda benar-benar perlu.
// Namun, tag <link> tidak boleh berada di dalam komponen fungsional seperti ini
// kecuali dikembalikan sebagai bagian dari render (yang tidak disarankan).
// Contoh di sini akan menghapus tag <link> dari badan fungsi.

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);
  
  // Tag <link> telah dihapus dari sini. Sebaiknya diletakkan 
  // di file '_app.js' atau 'layout.js' di Next.js.
  // <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"></link>

  return (
    <header className="header">
      {/* Menggunakan komponen <Image> dari Next.js */}
      <Image src="/assets/logo.png" width={95} height={35} alt="Logo" />

      <input type="checkbox" id="check" />
      {/* MENGGANTI 'for' dengan 'htmlFor' untuk kompatibilitas JSX */}
      <label htmlFor="check" className="icons"> 
       <i className="bx bx-menu" id="menu-icon"></i>
       <i className="bx bx-x" id="close-icon"></i>
      </label>

      <nav className="navbar">
        {/* MEMPERBAIKI prop 'style': 
            1. Menggunakan objek JS: style={{...}}
            2. Properti kustom CSS (seperti '--i') HARUS berupa string: 
               style={{ '--i': '0' }} atau style={{ '--i': 0 }}
            3. Pastikan properti kustom Anda benar ('--i' vs 'i')
        */}
        <a href="/" style={{ "--i": 0 }}>Home</a>
        <a href="/about" style={{ "--i": 1 }}>About</a>
        <a href="/gallery" style={{ "--i": 2 }}>Gallery</a>
        {/* Memperbaiki properti 'i:3' menjadi '--i: 3' */}
        <a href="/treatments" style={{ "--i": 3 }}>Treatment</a> 
        {/* Memperbaiki properti 'i:4' menjadi '--i: 4' */}
        <a href="/contact" style={{ "--i": 4 }}>Contact</a> 
      </nav>
      {/* Anda mungkin ingin merender komponen yang diimpor di sini 
          jika Anda menggunakannya (misalnya <Nav /> atau <Socials />) */}
    </header>
  );
};

export default Header;