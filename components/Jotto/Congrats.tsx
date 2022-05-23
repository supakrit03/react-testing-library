import { FC } from "react";

type Props = {
  success?: boolean;
};

const Congrats: FC<Props> = ({ success }) => {
  if (!success) return <div data-testid="congrats" />;

  return (
    <div data-testid="congrats" className="alert alert-success">
      Congratulations! you guessed the word!
    </div>
  );
};

export default Congrats;
