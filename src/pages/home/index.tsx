
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1> home </h1>
      <Link className="btn" href="/login">
        go to login page
      </Link>
    </div>
  );
};

export default Home;
