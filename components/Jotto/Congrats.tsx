import { FC } from "react";

type Props = {
  success?: boolean;
};

const Congrats: FC<Props> = ({ success }) => {
  if (!success) return <div data-testid="congrats" />;

  return (
    <div data-testid="congrats" style={{ color: "green" }}>
      Congrats
    </div>
  );
};

export default Congrats;
