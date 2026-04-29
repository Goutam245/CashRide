import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const ensureMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const SEO = ({ title, description, canonical }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    ensureMeta("description", description);
    ensureMeta("og:title", title, "property");
    ensureMeta("og:description", description, "property");
    ensureMeta("og:type", "website", "property");

    const href = canonical || window.location.origin + window.location.pathname;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }, [title, description, canonical]);
  return null;
};

export default SEO;
export { SEO };
