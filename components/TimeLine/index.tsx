import { TimeLineItem } from "./TimeLineItem";
import { VerticalDivisor } from "./VerticalDivisor";

type Props = {};

export const TimeLine = ({}: Props) => {
  return (
    <div className="w-full flex">
      <TimeLineItem
        title="Teste"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, modi. Commodi, beatae totam provident officia reprehenderit nisi rem distinctio veritatis molestias facere. Distinctio error impedit dolores soluta ipsum numquam consequuntur!"
        adicionalInfo="92,8%"
      />

      <VerticalDivisor />

      <TimeLineItem
        title="Teste"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, modi. Commodi, beatae totam provident officia reprehenderit nisi rem distinctio veritatis molestias facere. Distinctio error impedit dolores soluta ipsum numquam consequuntur!"
        adicionalInfo="92,8%"
      />
    </div>
  );
};
