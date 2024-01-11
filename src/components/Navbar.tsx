import NextLink from "next/link";

import ToggleTheme from "@/components/ToggleTheme";
import {
  Navbar,
  NavbarMenu,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

export default () => {
  const menuItems = [
    {
      label: "หน้าหลัก",
      href: "/",
    },
    {
      label: "เกี่ยวกับ",
      href: "/about",
    },
    {
      label: "รายชื่อ",
      href: "https://docs.google.com/spreadsheets/d/1LjwYtoNO2XaEvUdLMCNtQ52tQihZtaic/edit#gid=378061273",
    },
    {
      label: "ติดต่อ Developer",
      href: "/contact",
    },
    {
      label: "IG ของห้อง",
      href: "https://www.instagram.com/bwn_samtub10/",
    },
    {
      label: "GitHub ผู้ทำเว็บ",
      href: "https://github.com/MANNEZ4966",
    },
    {
      label: "Source Code",
      href: "https://github.com/MANNEZ4966/3-10-room",
    },
  ];

  return (
    <Navbar shouldHideOnScroll={true} className="text-black dark:text-white">
      <NavbarContent justify="start">
        <NavbarMenuToggle aria-label={"Open/Close menu"} />
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarBrand>
          <NextLink href="/" className="font-bold text-slate-800 text-inherit uppercase dark:text-white">
            3/10 Room Website
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ToggleTheme />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              size="lg"
              href={item.href}
              as={NextLink}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
