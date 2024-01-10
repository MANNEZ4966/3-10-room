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
      label: "เกี่ยวกับเรา",
      href: "/about",
    },
    {
      label: "โครงการ",
      href: "/projects",
    },
    {
      label: "ติดต่อเรา",
      href: "/contact",
    },
    {
      label: "แฟ้มสะสมผลงาน",
      href: "/portfolio",
    },
    {
      label: "GitHub ผู้ทำเว็บ",
      href: "https://github.com/MANNEZ4966",
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
            จิรายุ
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
