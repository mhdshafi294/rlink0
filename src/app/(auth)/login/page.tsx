"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

import Container from "./../../../components/Container";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type LoginFields = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFields>({
    defaultValues: {},
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <div className="flex justify-between items-center min-h-screen w-full fancy_border_radius1_container overflow-hidden">
      <Container>
        <div>
          <h3 className="text-xl sm:text-5xl font-bold tracking-[-0.02em] leading-[1.3] mt-0 mb-16 text-white">
            Welcome Back
          </h3>
          <h4 className="text-slate-300 text-[22px] leading-[1.3] font-normal mt-0 mb-[72px] mx-0">
            Please sign in to see the dashboard.
          </h4>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-start items-start gap-5 mt-5"
          >
            <input
              type="text"
              placeholder="Email"
              required
              {...register("email")}
              className="bg-transparent outline-none w-[432px] h-[52px] rounded-sm border-b border-teal-800 p-[13px] focus:border-teal-200 focus:outline-none focus:scale-[101%] duration-300 focus:border-b-4"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
            <input
              type="password"
              placeholder="Password"
              required
              {...register("password")}
              className="bg-transparent outline-none w-[432px] h-[52px] rounded-sm border-b border-teal-800 p-[13px] focus:border-teal-200 focus:outline-none focus:scale-[101%] duration-300 focus:border-b-4"
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
            <button
              disabled={isSubmitting}
              type="submit"
              className="relative inline-flex items-center justify-center px-4 py-1.5 overflow-hidden font-medium text-sm text-indigo-600 rounded-full shadow-2xl group mr-2 mt-4"
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-600 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-sky-600 rounded-full blur-md"></span>
              </span>
              <span className="relative text-xl font-semibold text-slate-100 hover:text-white duration-300">
                {isSubmitting ? "Loading..." : "Login"}
              </span>
            </button>
            {/* <button
              onClick={() => {}}
              className="group isolate px-6 py-2 rounded-3xl bg-teal-950/90 shadow-none hover:shadow-lg overflow-hidden fancy relative w-40 h-10 transition-all duration-500"
            >
              <Link
                href={`#`}
                className="z-10 bg-transparent absolute inset-0 text-center text-lg pt-1.5 text-white/70 group-hover:text-white duration-200"
              >
                Login
              </Link>
            </button> */}
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
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="fancy_border_radius1"></div>
      </div>
    </div>
  );
};

export default LoginPage;
