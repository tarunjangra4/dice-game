import UserPoints from "./UserPoints";
import GameBoard from "./GameBoard";

function Home() {
  // const store = useSelector((store) => store);

  console.log("Home componenet");

  return (
    <div className="w-[100vw] bg-blue-100 px-5">
      <UserPoints />
      <GameBoard />
    </div>
  );
}

export default Home;
