import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Car, Mail, MapPin, Clock, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/cash-for-cars", label: "Cash for Cars" },
  { to: "/car-removal", label: "Car Removal" },
  { to: "/sell-my-car", label: "Sell My Car" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      {/* Top utility bar */}
      <div className="hidden md:block border-b border-border/50 bg-card/30 text-xs">
        <div className="container flex h-9 items-center justify-between text-muted-foreground">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary-glow" /> Open 7 days · 7am – 7pm</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary-glow" /> Servicing all metro suburbs</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:hello@cashride.com.au" className="hover:text-primary-glow transition-smooth flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> hello@cashride.com.au</a>
            <a href="tel:+61400000000" className="hover:text-primary-glow transition-smooth flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> 0400 000 000</a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-smooth",
          scrolled
            ? "glass-strong border-b border-border/60 shadow-card"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container flex h-16 lg:h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-xl group">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-elegant overflow-hidden">
              <Car className="h-5 w-5 relative z-10" />
              <span className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent" />
            </span>
            <span className="tracking-tight">Cash<span className="text-gradient">Ride</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-smooth",
                    isActive
                      ? "text-primary-glow"
                      : "text-foreground/75 hover:text-foreground"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full gradient-primary" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+61400000000"
              className="text-sm font-semibold flex items-center gap-2 text-foreground/90 hover:text-primary-glow transition-smooth"
            >
              <span className="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center animate-pulse-glow">
                <Phone className="h-4 w-4 text-primary-glow" />
              </span>
              0400 000 000
            </a>
            <Button asChild variant="hero" size="default">
              <Link to="/sell-my-car">Get Quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-secondary transition-smooth"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
            <nav className="container py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-3 text-base font-medium rounded-lg transition-smooth",
                      isActive ? "text-primary-glow bg-primary/10" : "text-foreground/80 hover:bg-secondary"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="grid grid-cols-2 gap-2 mt-3">
                <Button asChild variant="outline">
                  <a href="tel:+61400000000"><Phone className="h-4 w-4" /> Call</a>
                </Button>
                <Button asChild variant="hero">
                  <Link to="/sell-my-car">Get Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="relative border-t border-border/60 bg-card/40 mt-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[800px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 py-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-2xl mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-elegant">
                <Car className="h-5 w-5" />
              </span>
              Cash<span className="text-gradient">Ride</span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-5">
              Australia's most trusted cash-for-cars and free car removal service. Honest quotes,
              same-day pickup, and 100% eco-responsible recycling — backed by 15+ years and 25,000+ vehicles.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary-glow hover:border-primary/40 hover:-translate-y-0.5 transition-smooth"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Services</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/cash-for-cars" className="hover:text-primary-glow transition-smooth">Cash for Cars</Link></li>
              <li><Link to="/car-removal" className="hover:text-primary-glow transition-smooth">Car Removal</Link></li>
              <li><Link to="/sell-my-car" className="hover:text-primary-glow transition-smooth">Sell My Car</Link></li>
              <li><Link to="/cash-for-cars" className="hover:text-primary-glow transition-smooth">Scrap Cars</Link></li>
              <li><Link to="/car-removal" className="hover:text-primary-glow transition-smooth">4x4 & Ute Removal</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary-glow transition-smooth">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-glow transition-smooth">Contact</Link></li>
              <li><a href="#" className="hover:text-primary-glow transition-smooth">Reviews</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-smooth">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-smooth">Careers</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
                <a href="tel:+61400000000" className="hover:text-primary-glow transition-smooth">0400 000 000</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
                <a href="mailto:hello@cashride.com.au" className="hover:text-primary-glow transition-smooth">hello@cashride.com.au</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
                <span>Servicing all metro & surrounding suburbs</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
                <span>Open 7 days · 7am – 7pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 relative z-10">
          <div className="container py-5 text-xs text-muted-foreground flex flex-wrap gap-3 justify-between items-center">
            <span>© {new Date().getFullYear()} CashRide Pty Ltd. ABN 00 000 000 000. Licensed motor vehicle dealer.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-glow transition-smooth">Privacy</a>
              <a href="#" className="hover:text-primary-glow transition-smooth">Terms</a>
              <Link to="/admin" className="hover:text-primary-glow transition-smooth">Admin</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
