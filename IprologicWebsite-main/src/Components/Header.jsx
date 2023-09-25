import React from "react";
import "./CSS/header.css";
import { Facebook, Github, Mailbox2, Twitter } from "react-bootstrap-icons";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

import OurCompany from "./Pages/AboutPages/OurCompany";
import Pricing from "./Pages/AboutPages/Pricing";
import SubMenu01 from "./Pages/AboutPages/Submenu01";
import SubMenu02 from "./Pages/AboutPages/Submenu02";

import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";


import BlogGrid from "./Pages/BlogPages/BlogGrid";
import BlogSideBar  from "./Pages/BlogPages/BlogSidebar";
import BlogSingle from "./Pages/BlogPages/BlogSingle";
import BSubmenu01 from "./Pages/BlogPages/BSubmenu01";
import BSubmenu02 from "./Pages/BlogPages/BSubmenu02";

import Career from "./Pages/Careers";
import Contact from "./Pages/Contact.Jsx";







export default function Header() {
  return (
    <div>
      <BrowserRouter>
        <div className="Main-header">
          <div className="sub-header">
            <div className="row">
              <div className="col-4">
                <span className="icon">
                  <Facebook />
                </span>
                <span className="icon">
                  <Twitter />
                </span>
                <span className="icon">
                  {" "}
                  <Github />
                </span>
              </div>
              <div className="col-8">
                <div className="row">
                  <div className="col-6 call">
                    Call Us:<span className="text-light">+23-345-67890</span>{" "}
                  </div>
                  <div className="col-6 mail">
                    {" "}
                    <span>
                      <Mailbox2 />
                    </span>{" "}
                    <span className="text-light">supportus@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <hr/>
          </div>
         <div className="menu-item">
            <div className="brand-name"><span className="brand-one">Ipro</span><span className="brand-two">logic.</span></div>
            <div className="menus">
            <nav id="menu-area">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link>
          <ul className="submenu-1">
							<li><Link to="/our-company">Our Company</Link></li>
							<li><Link to="/pricing-details">Pricing</Link></li>
							<li><Link to="/submenu">SubMenu</Link>
								<ul className="submenu-2">
									<li><Link to="/sub-menu-1">Sub menu 01</Link></li>
									<li><Link to="/sub-menu-1">Sub menu 02</Link></li>									
								</ul>
							</li>
						</ul>
          </li>
					<li><Link to="/servieces">Services</Link></li>
					<li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/blog">Blog</Link>
          <ul className="submenu-1">
							<li><Link to="/blog-grid">Blog Grid</Link></li>
							<li><Link to="/blog-side-bar">Blog Side bar</Link></li>
							<li><Link to="/blog-single">Blog Single</Link></li>
              <li><Link to="/submenu-blog">Sub Menu</Link>
								<ul className="submenu-2">
									<li><Link to="/submenu-blog01">Sub menu 01</Link></li>
									<li><Link to="/submenu-blog02">Sub menu 02</Link></li>									
								</ul>
							</li>
						</ul>
							</li>
					<li><Link to="/careers">Careers</Link></li>
          <li><Link to="/contact">Contact</Link></li>
				</ul>
			</nav>
            </div>
         </div>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
         
             {/* dropdowns in about */}
             <Route path="/our-company"  element={<OurCompany />} />
             <Route path="/pricing-details"  element={<Pricing />} />
             <Route path="/submenu01"  element={<SubMenu01 />} />
             <Route path="/submenu01"  element={<SubMenu02 />} />

          <Route path="/servieces" element={<Services />} />


          <Route path="/portfolio" element={<Portfolio />} />


        
              {/* Blog Pages */}
              <Route path="/blog-grid" element={<BlogGrid />}/>
							<Route path="/blog-side-bar"  element={<BlogSideBar />}/>
							<Route path="/blog-single"  element={<BlogSingle />}/>
              <Route path="/submenu-blog-01"  element={< BSubmenu01/>}/>
              <Route path="/submenu-blog-02"  element={< BSubmenu02/>}/>

          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
         
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}
