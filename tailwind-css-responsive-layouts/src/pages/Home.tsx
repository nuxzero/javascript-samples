import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="m-10">
      <h2 className="text-2xl font-bold">Table content</h2>
      <ul className="list-disc mt-4">
        <li className="">
          <Link
            to="/top-navigation-scaffold"
            className="hover:text-blue-500 hover:underline"
          >
            Top navigation scaffold
          </Link>
        </li>
        <li className="">
          <Link
            to="/side-navigation-scaffold"
            className="hover:text-blue-500 hover:underline"
          >
            Side navigation scaffold
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
