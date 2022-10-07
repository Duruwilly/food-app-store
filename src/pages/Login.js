import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Spinner } from 'flowbite-react'
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { InputButton } from "../components/Button";


const Login = () => {
  const inputStyle =
    "appearance-none rounded-lg relative block w-full px-3 py-4 border border-gray-300 focus:outline-none placeholder:text-2xl text-3xl md:text-2xl focus:border-input-border";
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const passwordToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        setLoading(false)
        navigate("/");
      }
    } catch (error) {
      console.log(error.code)
      if (error.code === "auth/network-request-failed") {
        toast.error("Network error")
      } else {
        toast.error("Invalid Email or password")
      }
    }
    setLoading(false)
  };

  return (
    <section>
      <main className="flex items-center justify-center">
        <div className="max-w-4xl w-full mt-44">
          <div className="max-w-4xl w-full space-y-5">
            <h2 className="text-center text-6xl font-extrabold text-gray-900">
              Welcome Back!
            </h2>
            <form className="space-y-4" onSubmit={onSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <input
              required
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Email address"
                value={email}
                className={inputStyle}
                onChange={onChange}
              />
              <div className="relative">
                <input
                required
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  value={password}
                  className={inputStyle}
                  onChange={onChange}
                />
                {!showPassword && (
                  <FaEye
                    className="absolute top-4 right-1 mr-2 cursor-pointer"
                    size={15}
                    color="#1e1e1e"
                    onClick={passwordToggle}
                  />
                )}
                {showPassword && (
                  <FaEyeSlash
                    className="absolute top-4 right-1 mr-2 cursor-pointer"
                    size={15}
                    color="#1e1e1e"
                    onClick={passwordToggle}
                  />
                )}
              </div>
              <Link to="/forgot-password">
                <p className="text-center text-2xl text-indigo-700 font-medium underline mt-1">
                  Forgot your password?
                </p>
              </Link>
              <div>
                {loading ? (
                  <div className="group relative w-full flex justify-center border border-transparent py-3 text-3xl font-medium rounded-md text-white bg-primary focus:outline-none">
                      <Spinner />
                  </div>
                ) : (
                  <InputButton text="Sign in" />
                )}
              </div>
            </form>

            <p className="text-center text-3xl">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-indigo-700 underline"
              >
                Sign up
              </Link>
            </p>
            <p className="text-center text-2xl">
              By continuing you agree to the Policy and Rules of Lfoods
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
