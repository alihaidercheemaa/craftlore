"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, type FC } from "react";
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
import { MenuItems } from "~/constants/variable";

/* -------------------------------
   1) Add a prop interface
------------------------------- */
interface HeaderProps {
  /** If true, all links in the header become disabled (no navigation). */
  disabled?: boolean;
}

/** For convenience in submenus, define a type for each menu item. */
interface SubMenuItem {
  title: string;
  href: string;
  submenu?: SubMenuItem[];
}

/* ------------------------------------------
   2) Helper function to handle link props
------------------------------------------ */
function getLinkProps(
  href: string,
  disabled?: boolean,
  baseClass?: string,
) {
  return {
    // Override href to "#" when disabled so it won't navigate
    href: disabled ? "#" : href,
    // Prevent default navigation if disabled
    onClick: disabled ? (e: React.MouseEvent) => e.preventDefault() : undefined,
    // Add classes to visually indicate “disabled” 
    className: cn(
      baseClass,
      disabled && "cursor-not-allowed pointer-events-none text-gray-400"
    ),
  };
}

/* ------------------------------------------
   3) Your main Header component
------------------------------------------ */
export const Header: FC<HeaderProps> = ({ disabled = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Desktop submenu (fly-out)
  const SubMenu = ({ items }: { items: SubMenuItem[] }) => (
    <ul className="invisible absolute left-1/2 top-full -translate-x-1/2 border-t-2 border-secondary bg-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 lg:min-w-[150px] xl:min-w-[200px]">
      {items.map((item, index) => (
        <li key={index} className="group/nested relative border-b">
          <Link
            {...getLinkProps(
              item.href,
              disabled,
              "flex h-full w-full items-center justify-between px-4 py-2 text-primary hover:bg-secondary/80 hover:text-white lg:text-xs xl:text-sm 2xl:text-base"
            )}
          >
            {item.title}
            {item.submenu && <FaChevronRight size={10} />}
          </Link>
          {item.submenu && (
            <ul className="invisible absolute top-0 border-t-2 border-secondary bg-white opacity-0 transition-all duration-300 group-hover/nested:visible group-hover/nested:opacity-100 lg:right-full lg:min-w-[150px] xl:min-w-[200px] 2xl:left-full">
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex} className="border-b">
                  <Link
                    {...getLinkProps(
                      subItem.href,
                      disabled,
                      "block h-full w-full px-4 py-2 text-primary hover:bg-secondary/80 hover:text-white lg:text-xs xl:text-sm 2xl:text-base"
                    )}
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
        "sticky top-0 z-20 flex w-full flex-col bg-white text-primary transition-colors duration-300",
        isScrolled && "bg-primary text-white"
      )}
    >
      {/* ---------- Top Banner ---------- */}
      <div className="ml-auto hidden justify-between gap-6 rounded-bl-lg bg-primary p-6 py-2 text-white lg:flex">
        <div className="flex flex-col items-center gap-1 font-opensans md:flex-row xl:gap-3 2xl:gap-12">
          <p className="text-xs font-bold 2xl:text-2xl">
            <strong className="text-secondary">Craftlore</strong> - Kashmir
            Craft Repository System
          </p>
          <div className="hidden h-7 w-1 bg-secondary md:block" />
          <p className="text-sm 2xl:text-2xl">
            Initiative of Hamadan Craft Revival Foundation
          </p>
        </div>
        <div className="flex gap-4">
          {/* Register / Login */}
          <Button
            size="sm"
            variant="secondary"
            className={cn(
              "text-white text-xs xl:text-base",
              disabled && "pointer-events-none cursor-not-allowed opacity-50"
            )}
            asChild
          >
            {/* We can disable the Link inside the Button if we want. */}
            <Link
              {...getLinkProps("#", disabled)}
            >
              Register / Login
            </Link>
          </Button>

          {/* Social Icons */}
          <div className="flex gap-6">
            <Link
              {...getLinkProps("#", disabled, "flex items-center gap-2 hover:text-secondary text-sm xl:text-base")}
            >
              <FaTwitter />
            </Link>
            <Link
              {...getLinkProps("#", disabled, "flex items-center gap-2 hover:text-secondary text-sm xl:text-base")}
            >
              <FaFacebook />
            </Link>
            <Link
              {...getLinkProps("#", disabled, "flex items-center gap-2 hover:text-secondary text-sm xl:text-base")}
            >
              <FaLinkedin />
            </Link>
            <Link
              {...getLinkProps("#", disabled, "flex items-center gap-2 hover:text-secondary text-sm xl:text-base")}
            >
              <FaSignal />
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- Main Nav Bar ---------- */}
      <div className="flex w-full justify-between p-4">
        {/* Logo */}
        <div
          className={cn(
            "relative ml-6 h-[100px] w-[100px] md:ml-0",
            !isScrolled && "xl:h-[150px] xl:w-[150px]"
          )}
        >
          <Image
            src="/logo/logo.png"
            alt="logo for craftlore"
            fill
            sizes="100%"
            priority
          />
        </div>

        {/* -------- Desktop Nav -------- */}
        <div className="flex items-center px-6 py-4 lg:mx-auto">
          <nav className="hidden lg:flex">
            <ul className="flex gap-6 font-bold">
              {MenuItems.map((item, index) => (
                <li key={index} className="group relative">
                  <Link
                    {...getLinkProps(
                      item.href,
                      disabled,
                      "flex items-center gap-1 px-3 py-2 hover:text-secondary lg:text-xs xl:text-sm 2xl:text-base"
                    )}
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
                  {/* Render desktop SubMenu if present */}
                  {item.submenu && <SubMenu items={item.submenu} />}
                </li>
              ))}
            </ul>
          </nav>

          {/* -------- Mobile Menu (Sheet) -------- */}
          <Sheet>
            <SheetTrigger
              className={cn(
                "text-white lg:hidden",
                !isScrolled && "text-primary",
                disabled && "pointer-events-none cursor-not-allowed opacity-50"
              )}
            >
              <FaBars size={32} />
            </SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle>Craftlore</SheetTitle>
                <ul className="grid gap-6">
                  {MenuItems.map((item, index) => (
                    <li key={index} className="relative">
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <Link
                            {...getLinkProps(
                              item.href,
                              disabled,
                              "flex items-center gap-1 px-3 py-2 text-sm text-gray-900 hover:text-secondary"
                            )}
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

                        {/* Mobile Submenu */}
                        {item.submenu && (
                          <CollapsibleContent className="flex-start flex">
                            <ul className="pl-4">
                              {item.submenu.map((subItem, subIndex) => (
                                <li key={subIndex} className="py-2">
                                  <Link
                                    {...getLinkProps(
                                      subItem.href,
                                      disabled,
                                      "block text-sm text-gray-700 hover:text-secondary"
                                    )}
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
