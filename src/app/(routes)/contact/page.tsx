import { Link } from "@nextui-org/link";
import NextLink from "next/link";

export default () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="shadow m-2 p-6 rounded-xl bg-white/5">
        <p>Facebook</p>
        <Link
          isExternal
          showAnchorIcon
          as={NextLink}
          href={"https://www.facebook.com/MANNEZ.xyz"}
          className="font-bold"
          color='success'
        >
          Jittiphat Somsai
        </Link>
      </div>
      <div className="shadow m-2 p-6 rounded-xl bg-white/5">
        <p>Email</p>
        <Link
          isExternal
          showAnchorIcon
          as={NextLink}
          href={"mailto:Jittiphat@mannez.site"}
          className="font-bold"
          color='success'
        >
          Jittiphat@mannez.site
        </Link>
      </div>
      <div className="shadow m-2 p-6 rounded-xl bg-white/5">
        <p>Discord</p>
        <Link
          isExternal
          showAnchorIcon
          as={NextLink}
          href={"https://discord.com/users/776836808259534878"}
          className="font-bold"
          color='success'
        >
          @mannez_xyz
        </Link>
      </div>
      <div className="shadow m-2 p-6 rounded-xl bg-white/5">
        <p>Instragram</p>
        <Link
          isExternal
          showAnchorIcon
          as={NextLink}
          href={"https://www.instagram.com/mannez_xyz/"}
          className="font-bold"
          color='success'
        >
          @mannez_xyz
        </Link>
      </div>
    </div>
  </>
);
