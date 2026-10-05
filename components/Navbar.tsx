"use client";

import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const links = [
  ["About TIS", "#about"],
  ["Academics", "#academics"],
  ["Boarding Life", "#boarding"],
  ["Beyond Academics", "#beyond"],
  ["Events", "#events"],
  ["Admission", "#admission"],
  ["Alumni Network", "#alumni"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <span><Phone size={18} fill="currentColor" /> ADMISSIONS HELPLINE NO. +91-9837983791</span>
        <a href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer">Enquire Now</a>
      </div>
      <header className="nav-wrap">
        <a href="#top" className="logo-link" aria-label="Tula's International School">
          <img src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png" alt="Tula's International School" />
        </a>
        <nav className="desktop-nav">
          {links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open && <div className="mobile-menu">
        {links.map(([label, href]) => <a onClick={() => setOpen(false)} href={href} key={label}>{label}</a>)}
        <a className="mobile-apply" href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer">Apply Now</a>
      </div>}
    </>
  );
}
