/**
 * CLIENT CONFIGURATION
 * Update this file for each florist client. Keep contact actions in demo mode
 * until the business owner approves the details and you intentionally enable live actions.
 */
export const SITE = {
  name: "Bloom Atelier",
  tagline: "Flowers that say what words cannot.",
  announcement: "A little beauty for every kind of day",
  city: "Vijayawada",
  state: "Andhra Pradesh",
  address: "Shop No. 18, CSI Dyva Krupa Complex, Prakasam Road, Suryaraopet, Vijayawada, Andhra Pradesh 520002",
  phoneDisplay: "+91 866 297 4559",
  phoneDigits: "918662974559",
  whatsappDigits: "918662974559",
  email: "hello@example.com",
  domain: "https://www.example.com",
  mapQuery: "Flower World, Shop No 18 CSI Dyva Krupa Complex, Prakasam Road, Suryaraopet, Vijayawada, Andhra Pradesh 520002",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Flower+World+Shop+No+18+CSI+Dyva+Krupa+Complex+Prakasam+Road+Vijayawada",
  hours: "Daily · confirm hours with the shop",
  demoMode: true,
  brand: {
    primary: "#315b49",
    primaryDark: "#203f33",
    accent: "#d48b88",
    accentSoft: "#f4dfdc",
    background: "#fbf7f2",
    surface: "#ffffff",
    text: "#25352d",
    muted: "#788179",
    border: "#e9e2da"
  },
  seo: {
    title: "Bloom Atelier | Premium Flowers & Bouquets in Vijayawada",
    description: "Shop beautiful flower bouquets, fresh roses, celebration flowers and custom floral arrangements in Vijayawada, Andhra Pradesh.",
    keywords: "flower shop Vijayawada, bouquets Vijayawada, florist Andhra Pradesh, rose bouquets, birthday flowers, wedding flowers",
    ogImage: "/images/hero-flowers.svg"
  },
  hero: {
    eyebrow: "FLOWERS, THOUGHTFULLY ARRANGED",
    title: "Make the moment\nfeel like forever.",
    description: "Fresh stems, artful arrangements and little gestures that become treasured memories.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=85"
  },
  collections: [
    { id: 1, name: "The Classic Rose Edit", category: "Roses", price: "From ₹499", tag: "Bestseller", image: "https://images.unsplash.com/photo-1548094967-e25a127d1d16?auto=format&fit=crop&w=900&q=80", description: "A timeless rose bouquet, wrapped with care." },
    { id: 2, name: "Blush Garden", category: "Signature", price: "From ₹899", tag: "Loved", image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80", description: "Soft pinks, delicate textures and garden charm." },
    { id: 3, name: "Sunshine Stems", category: "Seasonal", price: "From ₹699", tag: "Brighten their day", image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=80", description: "Cheerful blooms with a golden-hour mood." },
    { id: 4, name: "Petals & Poetry", category: "Signature", price: "From ₹1,299", tag: "Editor's pick", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80", description: "A considered mix of colour, shape and movement." },
    { id: 5, name: "White Serenity", category: "Minimal", price: "From ₹799", tag: "Elegant", image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=900&q=80", description: "Airy whites and understated elegance." },
    { id: 6, name: "Wildflower Weekend", category: "Seasonal", price: "From ₹999", tag: "Fresh pick", image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=900&q=80", description: "A relaxed, meadow-inspired floral mix." },
    { id: 7, name: "Velvet Romance", category: "Roses", price: "From ₹1,499", tag: "Romantic", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80", description: "Deep romantic tones for a grand gesture." },
    { id: 8, name: "The Thank You Bunch", category: "Gifting", price: "From ₹599", tag: "Thoughtful", image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=900&q=80", description: "A beautiful way to say you appreciate them." },
    { id: 9, name: "Birthday Bloom Box", category: "Gifting", price: "From ₹1,199", tag: "Celebration", image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=900&q=80", description: "A festive arrangement for their special day." },
    { id: 10, name: "Bridal Blush", category: "Wedding", price: "Custom quote", tag: "Made to order", image: "https://images.unsplash.com/photo-1507504031003-b417219a0a33?auto=format&fit=crop&w=900&q=80", description: "Romantic floral styling for wedding moments." },
    { id: 11, name: "Orchid Whisper", category: "Premium", price: "From ₹1,599", tag: "Premium", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=80", description: "Sculptural stems with a modern, luxe feel." },
    { id: 12, name: "Little Joy Basket", category: "Gifting", price: "From ₹1,099", tag: "Gift-ready", image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=900&q=80", description: "A charming basket made for happy surprises." },
    { id: 13, name: "Garden Party", category: "Signature", price: "From ₹1,399", tag: "Statement", image: "https://images.unsplash.com/photo-1494620968405-3b1f9f2f2f9f?auto=format&fit=crop&w=900&q=80", description: "Colourful blooms arranged with a playful touch." },
    { id: 14, name: "Soft Peach Haze", category: "Minimal", price: "From ₹899", tag: "Soft tones", image: "https://images.unsplash.com/photo-1494336934272-f0efcedfc8e3?auto=format&fit=crop&w=900&q=80", description: "Warm peach tones and a delicate silhouette." },
    { id: 15, name: "Anniversary Muse", category: "Roses", price: "From ₹1,699", tag: "For two", image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80", description: "A meaningful arrangement for shared milestones." },
    { id: 16, name: "Forever & Always", category: "Wedding", price: "Custom quote", tag: "Bespoke", image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80", description: "Wedding flowers planned around your vision." },
    { id: 17, name: "Pastel Daydream", category: "Signature", price: "From ₹1,199", tag: "Pastel", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80", description: "A soft, dreamy mix of seasonal flowers." },
    { id: 18, name: "Bold & Beautiful", category: "Premium", price: "From ₹1,499", tag: "Statement", image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=900&q=80", description: "Expressive colour and confident composition." },
    { id: 19, name: "Congratulations, Darling", category: "Gifting", price: "From ₹899", tag: "Celebrate", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80", description: "A joyful bouquet for the next big chapter." },
    { id: 20, name: "Gentle Sympathy", category: "Minimal", price: "From ₹1,199", tag: "Thoughtful", image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=900&q=80", description: "A graceful expression of care and support." },
    { id: 21, name: "Gerbera Glow", category: "Seasonal", price: "From ₹599", tag: "Colourful", image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=80", description: "Bright, cheerful stems with a playful finish." },
    { id: 22, name: "Lily Lane", category: "Premium", price: "From ₹1,099", tag: "Elegant", image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80", description: "Beautifully composed lilies for thoughtful gifting." },
    { id: 23, name: "The Mini Posy", category: "Gifting", price: "From ₹399", tag: "Little treat", image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=900&q=80", description: "A petite bunch for an everyday happy moment." },
    { id: 24, name: "Blossom Box", category: "Premium", price: "From ₹1,299", tag: "Gift box", image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=900&q=80", description: "A keepsake-style floral gift with lovely details." },
    { id: 25, name: "Morning Meadow", category: "Seasonal", price: "From ₹799", tag: "Seasonal", image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=900&q=80", description: "Fresh-picked feeling with natural movement." },
    { id: 26, name: "Ruby Celebration", category: "Roses", price: "From ₹1,099", tag: "Classic", image: "https://images.unsplash.com/photo-1548094967-e25a127d1d16?auto=format&fit=crop&w=900&q=80", description: "Rich red blooms with a celebratory spirit." },
    { id: 27, name: "Ivory & Green", category: "Minimal", price: "From ₹999", tag: "Modern", image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=900&q=80", description: "A refined palette for calm, modern spaces." },
    { id: 28, name: "The Grand Gesture", category: "Premium", price: "From ₹2,499", tag: "Luxury", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80", description: "A generous arrangement designed to impress." },
    { id: 29, name: "New Beginnings", category: "Gifting", price: "From ₹799", tag: "New baby", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80", description: "A gentle welcome for life's newest chapter." },
    { id: 30, name: "Festive Flourish", category: "Seasonal", price: "From ₹1,199", tag: "Festive", image: "https://images.unsplash.com/photo-1494336934272-f0efcedfc8e3?auto=format&fit=crop&w=900&q=80", description: "Seasonal colours styled for family gatherings." },
    { id: 31, name: "The Host Gift", category: "Gifting", price: "From ₹899", tag: "Host gift", image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=900&q=80", description: "A thoughtful arrangement to arrive with." },
    { id: 32, name: "Corporate Bloom", category: "Events", price: "Custom quote", tag: "Business", image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80", description: "Floral accents for offices, launches and events." },
    { id: 33, name: "Tabletop Garden", category: "Events", price: "From ₹1,099", tag: "Home styling", image: "https://images.unsplash.com/photo-1494620968405-3b1f9f2f2f9f?auto=format&fit=crop&w=900&q=80", description: "A centrepiece to bring the table to life." },
    { id: 34, name: "The Welcome Arrangement", category: "Events", price: "Custom quote", tag: "Venue styling", image: "https://images.unsplash.com/photo-1507504031003-b417219a0a33?auto=format&fit=crop&w=900&q=80", description: "A warm floral welcome for guests and visitors." },
    { id: 35, name: "Love Notes", category: "Roses", price: "From ₹799", tag: "Romantic", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80", description: "A sweet, simple way to share affection." },
    { id: 36, name: "Petite Orchid Gift", category: "Premium", price: "From ₹1,299", tag: "Contemporary", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=80", description: "A modern floral gift with a sculptural feel." }
  ],
  services: [
    { title: "Bouquets made personal", text: "Tell us the feeling, colour palette or budget. We'll help shape the gesture." },
    { title: "Celebration & event florals", text: "Thoughtful flowers for weddings, birthdays, intimate dinners and milestones." },
    { title: "Same-day enquiries", text: "Ask about today's available stems and local delivery options before ordering." }
  ]
};
