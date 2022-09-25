import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const link2 = links.map((link,index) =>{
  return <a key={index} href={'#' + link}>{link}</a>
})
  return <nav>
    {link2} 
    </nav>;
}

export default NavBar;
