type Props = {
  title: string;
  description: string;
  adicionalInfo?: string;
};

export const TimeLineItem = ({ title, description, adicionalInfo }: Props) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-neutral-200 border border-neutral-900 rounded-md w-full shadow-md">
      <div className="flex items-center gap-2 text-neutral-900">
        <h1 className="">{title}</h1> - <i>{adicionalInfo}</i>
      </div>
      <p className="text-justify text-neutral-500">{description}</p>
    </div>
  );
};
