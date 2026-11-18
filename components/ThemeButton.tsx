import { MoonIcon } from "@phosphor-icons/react/dist/ssr";

export const ThemeButton = () => {
  return (
    <button className="flex items-center justify-center p-2 rounded-full text-neutral-900 hover:bg-neutral-200 hover:cursor-pointer">
      <MoonIcon size={20} weight="fill" />
    </button>
  );
};
