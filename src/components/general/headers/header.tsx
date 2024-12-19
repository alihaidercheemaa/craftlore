"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaBars,
  FaChevronRight,
  FaFacebook,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaSignal,
  FaTwitter,
} from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { cn } from "~/lib/utils";

interface MenuItem {
  title: string;
  href: string;
  submenu?: MenuItem[];
}

// Define the props interface for the SubMenu component
interface SubMenuProps {
  items: MenuItem[];
  isNested?: boolean;
}

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Craft Repository Registry",
      href: "#",
      submenu: [
        { title: "CRAFT PROFILE", href: "/craft-registry/profiling" },
        {
          title: "GEOGRAPHICAL INDICATION",
          href: "#",
          submenu: [
            { title: "ABOUT GI & IT PROCESS", href: "/craft-registry/process" },
            { title: "CONSUMER REPORTING", href: "/craft-registry/reporting" },
            { title: "GI LISTING", href: "/craft-registry/listing" },
          ],
        },
        {
          title: "BLOCK CHAIN TRACEABILITY",
          href: "/craft-registry/blockchain",
        },
        { title: "CARBON FOOTPRINT", href: "/craft-registry/carbon-footprint" },
        {
          title: "CRAFT PRICE ESITMATOR",
          href: "/craft-registry/cost-estimation",
        },
      ],
    },
    {
      title: "CRAFT INDUSTRY LISTING",
      href: "/listing",
    },
    {
      title: "CRAFT VULNERABILITY",
      href: "#",
      submenu: [
        {
          title: "INTELLECTUAL PROPERTY",
          href: "/craft-vulnerability/property",
        },
        { title: "COUNTERFEITS", href: "/craft-vulnerability/counterfeit" },
        { title: "DEPENDENCY", href: "/craft-vulnerability/dependency" },
        { title: "TECHNOLOGICAL GAPS", href: "/craft-vulnerability/gap" },
        { title: "GENERATIONAL SHIFT", href: "/craft-vulnerability/shift" },
      ],
    },
    {
      title: "CRAFT SOCIO-ECONOMICS",
      href: "#",
      submenu: [
        {
          title: "ECONOMICS",
          href: "/economics",
          submenu: [
            { title: "PRODUCTION INSIGHTS", href: "/economics/production" },
            { title: "EXPORT DATA", href: "/economics/export" },
          ],
        },
        {
          title: "EMPLOYMENT",
          href: "/employment",
          submenu: [
            { title: "WAGE EQUITY", href: "/employment/wage" },
            { title: "EMPLOYMENT TRENDS", href: "/employment/trend" },
            { title: "EMPLOYMENT GROWTH", href: "/employment/growth" },
          ],
        },
        {
          title: "GENDER DYNMAICS",
          href: "/gender",
          submenu: [{ title: "STATISTICAL INSIGHTS", href: "/gender/insight" }],
        },
      ],
    },
    {
      title: "ABOUT CRATFLORE",
      href: "#",
      submenu: [
        { title: "MISSION", href: "/about/mission" },
        { title: "CRAFTLORE PROJECTS", href: "/about/project" },
        { title: "CRAFTLORE REGISTRY", href: "/about/registry" },
        { title: "REGISTRY ARCHITECTURE", href: "/about/architecture" },
        {
            title: "LISTING",
            href: "#",
            submenu: [
              { title: "ARTISANS", href: "/listing/registration" },
              { title: "BUSINESSES", href: "/listing/registration" },
              { title: "INSTITUTES", href: "/listing/registration" },
            ],
          },
        {
          title: "CRAFT ALLIANCE",
          href: "#",
          submenu: [{ title: "SPONSORS", href: "/about/sponsor" }],
        },
        {
          title: "MEMBERSHIP",
          href: "#",
          submenu: [
            { title: "BUYER SUPPORT MEMBERSHIP", href: "/buyer" },
            { title: "CORPORATE MEMBERSHIP", href: "/corporate" },
            { title: "SPONSOR MEMBERSHIP", href: "/sponsorship" },
          ],
        },
        {
          title: "NETWORK",
          href: "#",
          submenu: [
            { title: "INTERNATIONAL", href: "/about/network" },
            { title: "INDIA", href: "/about/network/institution" },
          ],
        },
        { title: "CAREER", href: "/about/career" },
        { title: "TEAM", href: "/about/team" },
        { title: "CONTACT US", href: "/about/contact-us" },
      ],
    },
  ];

  const SubMenu = ({ items, isNested = false }: SubMenuProps) => (
    <ul
      className={`absolute ${isNested ? "left-full top-0" : "left-1/2 top-full -translate-x-1/2"} invisible min-w-[200px] border-t-2 border-secondary bg-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100`}
    >
      {items.map((item, index) => (
        <li key={index} className="group/nested relative border-b">
          <Link
            href={item.href}
            className="flex h-full w-full items-center justify-between px-4 py-2 text-base text-primary hover:bg-secondary/80 hover:text-white"
          >
            {item.title}
            {item.submenu && <FaChevronRight size={10} />}
          </Link>
          {item.submenu && (
            <ul className="invisible absolute left-full top-0 min-w-[200px] border-t-2 border-secondary bg-white opacity-0 transition-all duration-300 group-hover/nested:visible group-hover/nested:opacity-100">
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex} className="border-b">
                  <Link
                    href={subItem.href}
                    className="block h-full w-full px-4 py-2 text-base text-primary hover:bg-secondary/80 hover:text-white"
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={cn(
        "fixed top-0 z-20 col-span-12 flex w-full flex-col items-center bg-white text-primary transition-colors duration-300",
        isScrolled && "bg-primary text-white",
      )}
    >
      {/* Top bar */}
      <div className="hidden justify-between gap-6 py-2 lg:flex">
        <div className="flex flex-col gap-6 lg:flex-row">
          <p className="flex items-center gap-2">
            <FaLocationDot className="text-secondary" />
            <span className="text-wrap text-xs">
              ARTISAN LANE 2 DAR UL ZAMROOD GOUSIA COLONY EXT ZAKURA SRG INDIA
            </span>
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-secondary" />
            <span>(+917) 814 - 3527</span>
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            className="flex items-center gap-2 hover:text-secondary"
            href="#"
          >
            <FaTwitter />
          </Link>
          <Link
            className="flex items-center gap-2 hover:text-secondary"
            href="#"
          >
            <FaFacebook />
          </Link>
          <Link
            className="flex items-center gap-2 hover:text-secondary"
            href="#"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="flex items-center gap-2 hover:text-secondary"
            href="#"
          >
            <FaSignal />
          </Link>
        </div>
      </div>

      <div className="flex w-full items-center justify-between px-6 py-4">
        <Image
          src="/logo/logo.png"
          alt="logo for craftlore"
          width={100}
          height={100}
        />

        {/* larger screens */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-6">
            {menuItems.map((item, index) => (
              <li key={index} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-base hover:text-secondary"
                >
                  {item.title}
                  {item.submenu && (
                    <span className="inline-flex items-center">
                      <FaChevronDown
                        className="transition-transform duration-200 group-hover:hidden"
                        size={10}
                      />
                      <FaChevronUp
                        className="hidden transition-transform duration-200 group-hover:block"
                        size={10}
                      />
                    </span>
                  )}
                </Link>
                {item.submenu && <SubMenu items={item.submenu} />}
              </li>
            ))}
          </ul>
        </nav>

        <Button variant={isScrolled ? 'outline':'default'} className={cn("text-white",isScrolled && "text-primary")}>Login</Button>

        <Sheet>
          <SheetTrigger className="text-white lg:hidden">
            <FaBars />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
              <SheetTitle>Craftlore </SheetTitle>
              <ul className="grid gap-6">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Link
                          href={item.href}
                          className="flex items-center gap-1 px-3 py-2 text-sm text-gray-900 hover:text-secondary"
                        >
                          {item.title}
                          {item.submenu && (
                            <span className="ml-2 inline-flex items-center">
                              <FaChevronDown
                                className="group-hover:hidden"
                                size={10}
                              />
                              <FaChevronUp
                                className="hidden group-hover:block"
                                size={10}
                              />
                            </span>
                          )}
                        </Link>
                      </CollapsibleTrigger>
                      {item.submenu && (
                        <CollapsibleContent className="flex-start flex">
                          <ul className="pl-4">
                            {item.submenu.map((subItem, subIndex) => (
                              <li key={subIndex} className="py-2">
                                <Link
                                  href={subItem.href}
                                  className="block text-sm text-gray-700 hover:text-secondary"
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  </li>
                ))}
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
