type Props = {
  workRole: string;
  workPeriod: string;
};

export const WorkItem = ({ workRole, workPeriod }: Props) => {
  return (
    <div className="flex w-full justify-between">
      <p>{workRole}</p>
      <i>{workPeriod}</i>
    </div>
  );
};
