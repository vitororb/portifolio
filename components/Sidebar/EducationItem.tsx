type Props = {
  educationName: string;
  educationPeriod: string;
};

export const EducationItem = ({ educationName, educationPeriod }: Props) => {
  return (
    <div className="flex gap-2 items-center justify-between w-full">
      <p>{educationName}</p>
      <i>{educationPeriod}</i>
    </div>
  );
};
