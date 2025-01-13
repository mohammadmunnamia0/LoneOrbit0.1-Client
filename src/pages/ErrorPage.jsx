import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white ">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-gray-500">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-red-500 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesnt exist.Here are some
            helpful links:
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span
                onClick={() => {
                  navigate(-1);
                }}
              >
                Go back
              </span>
            </button>

            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-500 rounded-lg shrink-0 sm:w-auto hover:bg-green-500">
              <Link to="/">Take me home</Link>
            </button>
          </div>
        </div>

        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <img
            className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
            src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7870.jpg?t=st=1736785182~exp=1736788782~hmac=6d8df561f8f1eceb24240d219aa9794f618a25b4a9567560032c4fca5f97bba5&w=1060"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
