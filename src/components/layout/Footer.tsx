import { Link } from "react-router-dom";
const socialLinks = [{
  category: "For Networking",
  links: [{
    label: "LinkedIn",
    href: "https://linkedin.com"
  }]
}, {
  category: "For Updates",
  links: [{
    label: "Twitter",
    href: "https://twitter.com"
  }, {
    label: "Instagram",
    href: "https://instagram.com"
  }]
}, {
  category: "For Work",
  links: [{
    label: "Dribbble",
    href: "https://dribbble.com"
  }]
}];
export function Footer() {
  return <footer className="bg-black text-white">
      <div className="container py-20 md:py-28">
        {/* Main CTA */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[0.95] tracking-[-0.02em] mb-6">
            Let's connect.
          </h2>
          <a className="text-lg md:text-xl text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group" href="mailto:hello@synaptics.fr">
            hello@example.com
            <span className="inline-block transition-transform group-hover:translate-x-1 text-gray-500">→</span>
          </a>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {socialLinks.map(group => <div key={group.category}>
              <p className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 mb-4">{group.category}</p>
              <div className="flex flex-col gap-2">
                {group.links.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-base text-white hover:text-gray-300 transition-colors inline-flex items-center gap-2 group">
                    {link.label}
                    <span className="inline-block transition-transform group-hover:translate-x-1 text-gray-500">↗</span>
                  </a>)}
              </div>
            </div>)}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} SYNAPTICS. All rights reserved.
          </p>
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-sm text-gray-500 hover:text-white transition-colors">
              Work
            </Link>
            <Link to="/about" className="text-sm text-gray-500 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>;
}