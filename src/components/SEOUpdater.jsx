import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {

    const currentUrl = `https://lowdevco.vercel.app${location.pathname}`;
    
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);
  }, [location.pathname]);

  return null;
}

export default SEOUpdater;
