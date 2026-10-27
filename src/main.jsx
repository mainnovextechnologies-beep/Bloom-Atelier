import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Flower2, Heart, MapPin, Menu, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { SITE } from "./config";
import "./styles.css";

function App() {
  const [filter, setFilter] = useState("All");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState("");
  const categories = useMemo(() => ["All", ...new Set(SITE.collections.map(p => p.category))], []);
  const products = filter === "All" ? SITE.collections : SITE.collections.filter(p => p.category === filter);

  const demoAction = (kind, item = "") => {
    setSelected(item ? `${kind}: ${item}` : kind);
    setModal(true);
  };

  const handleImageError = (e) => {
    if (!e.currentTarget.dataset.fallback) {
      e.currentTarget.dataset.fallback = "true";
      e.currentTarget.src = "/images/flower-fallback.svg";
    }
  };

  return <>
    <div className="announcement"><Sparkles size={13}/><span>{SITE.announcement}</span><span className="announce-right">HANDCRAFTED WITH HEART</span></div>
    <header className="header">
      <a href="#home" className="brand" aria-label={`${SITE.name} home`}>
        <span className="brand-mark"><Flower2 size={25}/></span>
        <span><strong>{SITE.name}</strong><small>FLORAL STUDIO · {SITE.city.toUpperCase()}</small></span>
      </a>
      <button className="menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">{mobileMenu ? <X/> : <Menu/>}</button>
      <nav className={mobileMenu ? "nav open" : "nav"}>
        <a href="#collections" onClick={() => setMobileMenu(false)}>The Collection</a>
        <a href="#story" onClick={() => setMobileMenu(false)}>Our Philosophy</a>
        <a href="#services" onClick={() => setMobileMenu(false)}>What We Do</a>
        <a href="#visit" onClick={() => setMobileMenu(false)}>Visit Us</a>
      </nav>
      <button className="header-cta" onClick={() => demoAction("WhatsApp enquiry")}>Let's make someone smile <ArrowUpRight size={16}/></button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span/> {SITE.hero.eyebrow}</div>
          <h1>{SITE.hero.title.split("\n").map((line, i) => <React.Fragment key={i}>{i > 0 && <br/>}{i === 1 ? <em>{line}</em> : line}</React.Fragment>)}</h1>
          <p>{SITE.hero.description}</p>
          <div className="hero-actions">
            <a className="button primary" href="#collections">Explore the collection <ArrowRight size={17}/></a>
            <a className="text-link" href="#story">A little about us <ArrowDown size={15}/></a>
          </div>
          <div className="hero-note"><div className="avatar-stack"><span>✿</span><span>❀</span><span>✽</span></div><div><strong>Every bouquet has a feeling.</strong><small>Let us help you find the right one.</small></div></div>
          <div className="hero-stamp"><Flower2 size={24}/><span>FRESH<br/>FEELINGS</span></div>
        </div>
        <div className="hero-visual">
          <img src={SITE.hero.image} onError={handleImageError} alt="A beautifully styled bouquet of fresh flowers"/>
          <div className="image-label"><span>01 / THE SIGNATURE EDIT</span><strong>Nature, arranged.</strong></div>
          <div className="floating-note"><Heart size={17} fill="currentColor"/><span>Made to mean<br/><b>something.</b></span></div>
          <div className="vertical-caption">FLOWERS FOR EVERY KIND OF FEELING</div>
        </div>
      </section>

      <section className="ticker"><div>FOR THE BIG DAYS <span>✳</span> FOR THE SMALL WINS <span>✳</span> FOR NO REASON AT ALL <span>✳</span> FOR THE BIG DAYS <span>✳</span> FOR THE SMALL WINS <span>✳</span></div></section>

      <section className="collections section" id="collections">
        <div className="section-heading">
          <div><div className="eyebrow"><span/> THE FLOWER EDIT</div><h2>Find your kind<br/><em>of beautiful.</em></h2></div>
          <p>From grand gestures to just-because blooms, every arrangement is an invitation to make a moment matter.</p>
        </div>
        <div className="filters" role="group" aria-label="Filter collections">
          {categories.map(c => <button key={c} className={filter === c ? "filter active" : "filter"} onClick={() => setFilter(c)}>{c}</button>)}
        </div>
        <div className="product-grid">
          {products.map((p, i) => <article className="product-card" key={p.id}>
            <button className="product-image" onClick={() => demoAction("Collection enquiry", p.name)} aria-label={`Enquire about ${p.name}`}>
              <img src={p.image} onError={handleImageError} alt={p.name} loading={i > 3 ? "lazy" : "eager"}/>
              <span className="product-tag">{p.tag}</span><span className="product-arrow"><ArrowUpRight size={18}/></span>
            </button>
            <div className="product-meta"><span>{p.category}</span><span>{p.price}</span></div>
            <h3>{p.name}</h3><p>{p.description}</p>
          </article>)}
        </div>
        <div className="collection-foot"><span>Showing {products.length} thoughtfully imagined arrangements</span><button className="text-link" onClick={() => { setFilter("All"); document.getElementById("collections")?.scrollIntoView({behavior:"smooth"}); }}>View all collections <ArrowRight size={15}/></button></div>
      </section>

      <section className="story" id="story">
        <div className="story-image"><img src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1100&q=85" onError={handleImageError} alt="Flowers arranged by hand in a floral studio" loading="lazy"/><div className="story-caption">A thoughtful touch, in every stem.</div></div>
        <div className="story-copy"><div className="eyebrow"><span/> A NOTE FROM OUR STUDIO</div><h2>Not just flowers.<br/><em>A feeling, in bloom.</em></h2><p>Some things are hard to put into words. That's where flowers come in. We bring together seasonal colour, beautiful textures and a little imagination to create arrangements that feel personal, considered and full of life.</p><p>Whether you're celebrating someone you love or simply making an ordinary day brighter, let's find the flowers that say it best.</p><a className="button outline" href="#services">Discover our approach <ArrowRight size={16}/></a><div className="signature">With love, <span>the floral team</span></div></div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading compact"><div><div className="eyebrow"><span/> A LITTLE SOMETHING FOR EVERY OCCASION</div><h2>Made for <em>your moments.</em></h2></div><p>Big milestones, everyday kindness or a beautiful room — we can help bring your idea to life.</p></div>
        <div className="service-grid">{SITE.services.map((s, i) => <article className="service-card" key={s.title}><div className="service-number">0{i+1}</div><div className="service-icon">{i === 0 ? <Flower2/> : i === 1 ? <Sparkles/> : <Heart/>}</div><h3>{s.title}</h3><p>{s.text}</p><button className="text-link" onClick={() => demoAction("Service enquiry", s.title)}>Let's talk <ArrowUpRight size={15}/></button></article>)}</div>
      </section>

      <section className="quote-band"><div className="quote-flower">❋</div><p>“The smallest things can hold<br/><em>the biggest feelings.</em>”</p><span>A LITTLE REMINDER FROM OUR STUDIO</span></section>

      <section className="visit section" id="visit">
        <div className="visit-copy"><div className="eyebrow"><span/> COME SAY HELLO</div><h2>Find us in<br/><em>{SITE.city}.</em></h2><p>Have a colour palette in mind? Need something for today? Tell us what you're dreaming of and we'll help you explore the possibilities.</p>
          <div className="address"><MapPin size={20}/><div><strong>{SITE.name}</strong><span>{SITE.address}</span><small>{SITE.hours}</small></div></div>
          <div className="visit-actions"><button className="button primary" onClick={() => demoAction("Call the shop")}>Call the studio <Phone size={16}/></button><button className="button pale" onClick={() => demoAction("WhatsApp enquiry")}>WhatsApp us <MessageCircle size={16}/></button></div>
          <a className="directions" href={SITE.mapUrl} target="_blank" rel="noreferrer">Open directions in Google Maps <ArrowUpRight size={15}/></a>
        </div>
        <div className="map-wrap"><iframe title={`Map to ${SITE.name} in ${SITE.city}`} src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&z=15&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><div className="map-label"><MapPin size={18}/><span><b>{SITE.city}, Andhra Pradesh</b><small>Visit our floral studio</small></span></div></div>
      </section>

      <section className="newsletter"><div className="newsletter-icon"><Flower2 size={28}/></div><div><span className="eyebrow">A LITTLE MORE BLOOM IN YOUR INBOX</span><h2>Let beautiful things find you.</h2><p>Enquire about seasonal flowers, special occasions and bespoke arrangements.</p></div><button className="button light" onClick={() => demoAction("General enquiry")}>Make an enquiry <ArrowRight size={16}/></button></section>
    </main>

    <footer className="footer"><div className="footer-top"><a href="#home" className="brand footer-brand"><span className="brand-mark"><Flower2 size={24}/></span><span><strong>{SITE.name}</strong><small>FLORAL STUDIO · {SITE.city.toUpperCase()}</small></span></a><p>Thoughtful flowers for all the things<br/>you wish you could put into words.</p><div className="footer-links"><a href="#collections">Collections</a><a href="#services">Services</a><a href="#visit">Visit</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {SITE.name}. All flowers, all feelings.</span><span>Website concept by MA Innovex Technologies</span><a href="#home">Back to top ↑</a></div></footer>

    <div className="floating-contact"><button aria-label="WhatsApp enquiry" onClick={() => demoAction("WhatsApp enquiry")}><MessageCircle size={22}/></button><button aria-label="Call shop" onClick={() => demoAction("Call the shop")}><Phone size={20}/></button></div>

    {modal && <div className="modal-backdrop" role="presentation" onClick={() => setModal(false)}><div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-title" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setModal(false)} aria-label="Close"><X/></button><div className="modal-icon"><Flower2 size={27}/></div><span className="eyebrow">A QUICK DEMO NOTE</span><h2 id="demo-title">This is a demo website.</h2><p>The {selected.toLowerCase()} feature is shown for preview only. No call is placed and no WhatsApp message or enquiry is sent.</p><p>On the live website, these buttons can connect directly to the shop's approved phone number and WhatsApp account.</p><button className="button primary modal-ok" onClick={() => setModal(false)}>Got it, thank you <Check size={16}/></button></div></div>}
  </>;
}

createRoot(document.getElementById("root")).render(<App />);
