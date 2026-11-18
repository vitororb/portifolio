import { DownloadSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { ThemeButton } from "../ThemeButton";
import { LinkItem } from "./LinkItem";

type Props = {};

export const Navbar = ({}: Props) => {
  return (
    <nav className="flex w-full border items-center justify-between px-6 py-2 rounded-full border-neutral-900 backdrop-blur-xs">
      <div className="flex items-center gap-4">
        <LinkItem text="Home" url="#" />
        <LinkItem text="About" url="#" />
        <LinkItem text="Projects" url="#" />
        <LinkItem text="Education" url="#" />
        <LinkItem text="Skills" url="#" />
      </div>

      <div className="flex items-center gap-4">
        <ThemeButton />

        <a
          href="../../public/curriculo-vitor_brandao.pdf"
          download="curriculo-vitor_brandao.pdf"
        >
          <button className="flex gap-2 items-center p-2 text-neutral-900 border rounded-full hover:cursor-pointer">
            <DownloadSimpleIcon size={20} />
            Donwload CV
          </button>
        </a>
      </div>
    </nav>
  );
};
