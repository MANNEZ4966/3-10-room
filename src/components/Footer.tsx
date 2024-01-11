import { Link } from "@nextui-org/link";
import NextLink from "next/link";

export default () => (
  <footer className="flex flex-col items-center space-y-1 pb-24">
    <p>
      จัดทำโดย{" "}
      <Link
        isExternal
        showAnchorIcon
        as={NextLink}
        href={"https://mannez.site"}
        className="font-bold"
      >
        Jittiphat Somsai
      </Link>
    </p>
    <p>Next.JS v14 | Website v0.1.0</p>
  </footer>
);
