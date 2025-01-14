export const MenuItems : MenuItemProps[] = [
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