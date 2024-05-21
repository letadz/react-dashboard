import React, { useState } from "react";
import FormGroup from "@/components/common/FormGroup";
import FormInput from "@/components/common/Inputs/FormInput";
import FormSubtitleDescription from "@/components/common/Inputs/FormSubtitleDescription";
import { LiaSpinnerSolid } from "react-icons/lia";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      window.location.href = "/users/login";
    }, 1000);
  };
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-base font-medium">Sign Up</h1>

        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow-xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
              <FormSubtitleDescription
                subtitle="New here?"
                description="Signing up is easy. It only takes a few steps"
              />

              <FormGroup htmlFor="username" label="Username">
                <FormInput type="text" name="username" placeholder="Username" />
              </FormGroup>

              <FormGroup htmlFor="email" label="Email Address">
                <FormInput
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                />
              </FormGroup>

              <FormGroup htmlFor="password" label="Password">
                <FormInput type="password" placeholder="••••••••" />
              </FormGroup>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <div className="flex items-center h-5">
                    <input
                      id="agree"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="agree"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree to all Terms & Conditions
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign up
              </button>
              <div className="flex gap-2 items-center text-sm font-medium text-gray-500 dark:text-gray-300">
                Already have an account?
                {isLoading ? (
                  <div>
                    <LiaSpinnerSolid className="h-6 w-6 text-gray-400 animate-spin" />
                  </div>
                ) : (
                  <div>
                    <a
                      href="/users/login"
                      className="text-blue-700 hover:underline dark:text-blue-500"
                      onClick={handleLogin}
                    >
                      Login
                    </a>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
