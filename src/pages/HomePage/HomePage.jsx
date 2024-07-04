import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="hero hero-main min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Here you can keep your contact book easily and conveniently! Enjoy
            yourself :)
          </p>
          <Link
            to="/contacts"
            className="btn get-started-btn bg-[#E76F51] border-[#E76F51]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
