import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export const AboutMe = () => {
  return (
    <div className="flex w-full">
      <div className="flex px-32 items-center justify-center">
        <div className="p-2 h-60 w-60 rounded-full border border-neutral-700 overflow-hidden">
          <img alt="profile-pic" src=""></img>
        </div>
      </div>
      <div className="flex flex-col text-neutral-900 w-full justify-center">
        <p>Hi, i am</p>
        <h1>Vítor Brandão</h1>
        <span>I am a ...</span>
        <button className="flex gap-2 items-center p-2 text-neutral-900 border rounded-full hover:cursor-pointer w-fit">
          Hire me
          <ArrowUpRightIcon size={20} />
        </button>
      </div>
    </div>
  );
};
