import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const socials = [
  { label: "Instagram", icon: FaInstagram, href: "#" },
  { label: "Facebook", icon: FaFacebookF, href: "#" },
  { label: "X", icon: FaXTwitter, href: "#" },
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies"];

const Footer = () => {
  return (
    <footer className="bg-[#244d3f] text-white">
      {/* Top part */}
      <div className="footer footer-center max-w-7xl mx-auto px-4 pt-12 pb-8 flex flex-col items-center gap-3">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          KeenKeeper
        </h2>

        <p className="text-sm text-gray-200 max-w-xl">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h6 className="mt-4 text-base font-medium">Social Links</h6>

        <div className="flex items-center gap-3">
          {socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-9 h-9 rounded-full bg-white text-[#244d3f] flex items-center justify-center hover:scale-110 transition"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom part */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t border-white/15 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <nav className="flex items-center gap-6">
            {legalLinks.map((item) => (
              <a key={item} className="link link-hover">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;