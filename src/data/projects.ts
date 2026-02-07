export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  color: string;
  heroImage?: string;
  fullDescription: string;
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    id: "nova-bank",
    title: "Nova Bank",
    subtitle: "Redefining digital banking for the next generation.",
    description: "Brand & Visual System",
    year: "2024",
    role: "Creative Direction, Brand Strategy",
    tags: ["BRAND", "FINTECH"],
    color: "hsl(220, 60%, 50%)",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    fullDescription: "Nova Bank represents a new era in digital banking. We crafted a complete brand identity that balances trust and innovation, creating a visual language that speaks to tech-savvy millennials while maintaining the reliability expected from a financial institution. The rebrand included a dynamic logo system, a sophisticated color palette, and comprehensive guidelines for digital and physical touchpoints.",
    galleryImages: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1600&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80"
    ],
  },
  {
    id: "mint-finance",
    title: "Mint Finance",
    subtitle: "Personal finance made simple and delightful.",
    description: "Product Design",
    year: "2024",
    role: "Lead Product Designer",
    tags: ["PRODUCT DESIGN", "UX"],
    color: "hsl(160, 50%, 45%)",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80",
    fullDescription: "Mint Finance transforms the way people interact with their money. Through extensive user research and iterative design, we created an intuitive mobile experience that makes budgeting, saving, and investing accessible to everyone. The app features smart insights, seamless transactions, and a calming visual design that removes the stress from financial management.",
    galleryImages: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80",
      "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=1600&q=80",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&q=80"
    ],
  },
  {
    id: "aura-wellness",
    title: "Aura Wellness",
    subtitle: "A holistic brand for modern self-care rituals.",
    description: "Strategy, Brand & Packaging",
    year: "2023",
    role: "Brand Strategist, Creative Director",
    tags: ["BRAND", "PACKAGING"],
    color: "hsl(30, 70%, 55%)",
    heroImage: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=1600&q=80",
    fullDescription: "Aura Wellness emerged from a desire to create a wellness brand that feels authentic and accessible. We developed a complete brand ecosystem from naming to packaging, crafting a visual identity rooted in natural textures, warm earth tones, and mindful typography. The result is a brand that invites customers into a world of intentional self-care.",
    galleryImages: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&q=80",
      "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=1600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1600&q=80"
    ],
  },
  {
    id: "synth-ai",
    title: "Synth AI",
    subtitle: "Humanizing artificial intelligence through thoughtful design.",
    description: "Branding & Visual System",
    year: "2023",
    role: "Creative Director",
    tags: ["BRAND", "TECH"],
    color: "hsl(270, 60%, 55%)",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
    fullDescription: "Synth AI needed an identity that could bridge the gap between complex technology and human understanding. We created a visual system that feels both futuristic and approachable, using fluid shapes, gradient systems, and a distinctive voice that demystifies AI. The brand adapts seamlessly across platforms while maintaining a consistent, trustworthy presence.",
    galleryImages: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=80",
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1600&q=80"
    ],
  },
  {
    id: "streamline",
    title: "Streamline",
    subtitle: "Reimagining how we discover and enjoy content.",
    description: "Product Design",
    year: "2023",
    role: "Senior Product Designer",
    tags: ["PRODUCT DESIGN", "ENTERTAINMENT"],
    color: "hsl(350, 60%, 50%)",
    heroImage: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1600&q=80",
    fullDescription: "Streamline's redesign focused on creating an immersive content discovery experience. We reimagined navigation patterns, developed a personalization engine interface, and crafted micro-interactions that make browsing feel effortless. The new design reduces decision fatigue while helping users find content they'll love, faster than ever before.",
    galleryImages: [
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1600&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1600&q=80",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&q=80"
    ],
  },
  {
    id: "atelier-digital",
    title: "Atelier Digital",
    subtitle: "A digital home for a multidisciplinary creative practice.",
    description: "Web Design & Development",
    year: "2022",
    role: "Strategy, Design Direction",
    tags: ["WEB DESIGN", "BRANDING"],
    color: "hsl(200, 50%, 45%)",
    heroImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&q=80",
    fullDescription: "Atelier Digital's website needed to embody their philosophy: that great design lives at the intersection of strategy and craft. We created an editorial experience with bold typography, thoughtful white space, and seamless transitions. The site showcases their work while telling the story of their creative process.",
    galleryImages: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=80",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1600&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80"
    ],
  },
  {
    id: "luxe-market",
    title: "Luxe Market",
    subtitle: "Elevating the online luxury shopping experience.",
    description: "E-commerce Design",
    year: "2024",
    role: "Lead Designer",
    tags: ["E-COMMERCE", "LUXURY"],
    color: "hsl(45, 80%, 50%)",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80",
    fullDescription: "Luxe Market demanded a shopping experience as refined as the products it sells. We designed an e-commerce platform that prioritizes visual storytelling, with immersive product galleries, seamless checkout flows, and personalized recommendations. Every interaction was crafted to feel premium, from browsing to unboxing.",
    galleryImages: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&q=80",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
    ],
  },
  {
    id: "medconnect",
    title: "MedConnect",
    subtitle: "Making healthcare accessible and stress-free.",
    description: "Healthcare UX/UI",
    year: "2024",
    role: "Product Designer",
    tags: ["HEALTHCARE", "ACCESSIBILITY"],
    color: "hsl(180, 50%, 45%)",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
    fullDescription: "MedConnect bridges the gap between patients and healthcare providers. We designed an inclusive application that simplifies appointment booking, medical record access, and telehealth consultations. The interface uses calming colors, clear typography, and intuitive navigation to reduce the anxiety often associated with healthcare management.",
    galleryImages: [
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=80",
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1600&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80"
    ],
  },
];
