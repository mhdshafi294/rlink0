"use client";

import Link from "next/link";

import Container from "./../../../components/Container";

const page = () => {
  return (
    <div className="flex justify-between items-center min-h-screen w-full fancy_border_radius1_container ">
      <Container>
        <div>
          <h1 className="">Welcome Back</h1>
          <h2 className="">Please sign in to see the dashboard.</h2>

          <form
            onSubmit={() => {}}
            className="flex flex-col justify-start items-start gap-5 mt-5"
          >
            <input
              type="text"
              placeholder="Email"
              required
              className="bg-transparent outline-none w-[432px] h-[52px] rounded-sm border-b border-teal-800 mt-[37px] p-[13px] focus:border-teal-500 focus:outline-none focus:scale-[101%] duration-500"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="bg-transparent outline-none w-[432px] h-[52px] rounded-sm border-b border-teal-800 mt-[37px] p-[13px] focus:border-teal-500 focus:outline-none focus:scale-[101%] duration-500"
            />

            <button
              onClick={() => {}}
              className="relative inline-flex items-center justify-center px-4 py-1.5 overflow-hidden font-medium text-sm text-indigo-600 rounded-full shadow-2xl group mr-2 mt-4"
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-600 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-sky-600 rounded-full blur-md"></span>
              </span>
              <span className="relative text-xl font-semibold text-slate-300 hover:text-white duration-300">
                Login
              </span>
            </button>
          </form>
          {/* <button onClick={() => {}} className="">
            Login with Google
          </button>
          <span className="">- OR -</span> */}
          <div className="mt-5 flex justify-start items-end gap-1">
            <p className="text-sm font-light ">Don&apos;t have one?</p>

            <Link
              className="text-xs font-light hover:text-teal-300 text-teal-100"
              href="/register"
            >
              Create new account
            </Link>
          </div>
          {/* <button
            onClick={() => {
              signIn("github");
            }}
            className={styles.button + " " + styles.github}
            >
            Login with Github
          </button> */}
        </div>
      </Container>
      <div className="w-1/2 flex justify-center items-center">
        <div className="fancy_border_radius1"></div>
      </div>
    </div>
  );
};

export default page;
