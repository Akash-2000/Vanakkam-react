import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

import Input from "../components/Input";

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});

const Login = () => {
  return (
    <div className="flex justify-center items-center bg-pink-200 h-screen">
      <div className="w-5/12 h-2/3 m-auto bg-white flex flex-col justify-center content-center items-center p-6 rounded-md shadow-md">
        <h3 className="text-2xl text-center font-semibold">Login</h3>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            // Simulating asynchronous operation, like an API call
            setTimeout(() => {
              alert("Form is validated! Submitting the form...");
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Input
                name="email"
                type="email"
                placeholder="Enter email"
                displayName="Email"
              />

              <Input
                name="password"
                type="password"
                placeholder="Enter password"
                displayName="Password"
              />

              <button
                type="submit"
                className="bg-green-300 px-4 py-2 rounded-md text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-2 flex justify-center items-center flex-col">
          <p className="font-medium">Forgot password?</p>

          <p className="font-medium">
            Don't have an account?
            <span className="underline text-blue-500 cursor-pointer ml-2">
              create account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
