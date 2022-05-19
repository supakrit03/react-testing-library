import type { NextPage } from "next";

import Counter from "../components/Counter";

const Home: NextPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Counter />
    </div>
  );
};

export default Home;
