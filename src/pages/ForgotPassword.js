import { useState, useEffect } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { InputButton } from "../components/Button";

const ForgotPassword = () => {
  const inputStyle =
    "appearance-none rounded-lg relative block w-full px-3 py-4 border border-gray-300 text-3xl md:text-2xl focus:outline-none focus:border-input-border";
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link was sent to your Email");
    } catch (error) {
      toast.error("Could not send reset link");
    }
  };

  return (
    <section>
      <main className="flex items-center justify-center">
        <div className="max-w-4xl w-full mt-44">
          <div className="max-w-4xl w-full space-y-8">
            <h2 className="text-center text-6xl font-extrabold text-gray-900">
              Forgot password
            </h2>
            <form className="space-y-4" onSubmit={onSubmit}>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Email addres"
                value={email}
                className={inputStyle}
                onChange={onChange}
              />
              <InputButton text="Retrieve password" />
            </form>
            <p className="text-center text-2xl">OR</p>
            <p className="text-center">
              <Link
                to="/login"
                className="font-medium text-indigo-700 text-3xl underline"
              >
                return back to sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ForgotPassword;
