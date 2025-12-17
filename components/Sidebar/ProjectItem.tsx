type Props = {
  projectName: string;
  projectStatus: string;
};

export const ProjectItem = ({ projectName, projectStatus }: Props) => {
  return (
    <div className="flex gap-2 items-center justify-between w-full">
      <p>{projectName}</p>
      <div className="w-fit py-0.5 px-3 rounded-full border-green-800 border-1 flex gap-2 items-center">
        <div className="w-2 h-2 rounded-full bg-green-800" />
        <p className="text-green-800 font-semibold">{projectStatus}</p>
      </div>
    </div>
  );
};
