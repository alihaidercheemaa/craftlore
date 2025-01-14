import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="mt-auto bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-1 text-center md:items-start md:text-left">
            <div className="flex items-center gap-2">
              <div className="relative h-[120px] w-[120px]">
                <Image
                  src="/logo/logo.png"
                  alt="Craftlore Logo"
                  fill
                  sizes="(max-width: 120px) 100vw, 120px"
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-300">
                CraftLore is a non-commercial platform and the world’s largest
                open craft repository focused on Kashmiri craftsmanship.
              </p>
            </div>
            <p className="text-sm text-gray-300">
              Led by a scientific narrative, it preserves, documents, and shares
              the rich cultural heritage of Kashmir’s artisanal traditions,
              Offering an extensive craft registry with access to over One
              Million Data Elements Representing 28 Major Crafts
              of Kashmir-India
            </p>
            <br/>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<FaFacebook size={20} />} />
              <SocialLink href="#" icon={<FaTwitter size={20} />} />
              <SocialLink href="#" icon={<FaPinterest size={20} />} />
              <SocialLink href="#" icon={<FaLinkedin size={20} />} />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="Geographical Indication" />
              <FooterLink href="#" text="Blockchain Traceability" />
              <FooterLink href="#" text="Carbon Footprint" />
              <FooterLink href="#" text="Craft Registry" />
              <FooterLink href="#" text="Price Estimation" />
              <FooterLink href="#" text="Trade Registry" />
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/about" text="About" />
              <FooterLink href="/contact" text="Contact" />
              <FooterLink href="/blog" text="Blog" />
              <FooterLink href="/careers" text="Careers" />
              <FooterLink href="/support" text="Support" />
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md bg-white/10 px-4 py-2 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-secondary"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md bg-white/10 px-4 py-2 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-secondary px-4 py-2 font-semibold text-white transition-colors hover:bg-secondary/80"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-primary-dark border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-between space-y-2 text-sm text-gray-300 md:flex-row md:space-y-0">
            <p>© {new Date().getFullYear()} Craftlore. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/terms" className="hover:text-white">
                Terms and Conditions
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/faq" className="hover:text-white">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-300 transition-colors hover:text-secondary"
  >
    {icon}
  </Link>
);

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link
      href={href}
      className="text-sm text-gray-300 transition-colors hover:text-secondary"
    >
      {text}
    </Link>
  </li>
);
