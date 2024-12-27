"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaBars,
  FaChevronRight,
  FaFacebook,
  FaLinkedin,
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

type MenuItem = {
  title: string;
  href: string;
  submenu?: MenuItem[];
};

type SubMenuProps = {
  items: MenuItem[];
};

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
      title: "HOME",
      href: "/",
    },
    {
      title: "CRAFT REPOSITORY REGISTRY",
      href: "#",
      submenu: [
        {
          title: "KASHMIR CRAFT PROFILE",
          href: "/craft-registry/profiling",
        },
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
        {
          title: "CRAFT CARBON FOOTPRINT",
          href: "/craft-registry/carbon-footprint",
        },
        {
          title: "CRAFT PRICE ESITMATOR",
          href: "/craft-registry/cost-estimation",
        },
        {
          title: "CRAFT TRADE REGISTRY",
          href: "/listing",
        },
      ],
    },
    {
      title: "CRAFT TRADE REGISTRY",
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

  const SubMenu = ({ items }: SubMenuProps) => (
    <ul className="invisible absolute left-1/2 top-full min-w-[200px] -translate-x-1/2 border-t-2 border-secondary bg-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
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
        "sticky top-0 z-20 col-span-12 flex w-full flex-col bg-white text-primary transition-colors duration-300",
        isScrolled && "bg-primary text-white",
      )}
    >
      <div className="ml-auto hidden lg:flex  justify-between gap-6 rounded-bl-lg bg-primary p-6 py-2 text-white ">
        <div className="flex flex-col items-center gap-1 font-opensans md:flex-row md:gap-12">
          <p className="text-lg font-bold md:text-2xl">
            <strong className="text-secondary">Craftlore</strong> - Kashmir
            Craft Repository System
          </p>
          <div className="hidden h-7 w-1 bg-secondary md:block" />
          <p className="text-xlmd:text-2xl">
            Initiative of Hamadan Craft Revival Foundation
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" className="text- text-white" asChild>
            <Link href="#">Register / Login</Link>
          </Button>
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
      </div>
      <div className="flex w-full p-4">
        <div
          className={cn(
            "relative h-[100px] w-[100px] ml-6 md:ml-0",
            !isScrolled && "lg:h-[150px] lg:w-[150px]",
          )}
        >
          <Image
            src="/logo/logo.png"
            alt="logo for craftlore"
            fill
            sizes="100vw"
          />
        </div>
        <div className="flex items-center mx-auto  px-6 py-4">
          <nav className="hidden lg:flex">
            <ul className="flex gap-6 font-bold">
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
          <Sheet>
            <SheetTrigger  className={cn(
            "text-white lg:hidden ",
            !isScrolled && "text-primary",
          )}>
              <FaBars size={32} />
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
      </div>
    </header>
  );
};
