import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Spinner } from 'flowbite-react'
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { InputButton } from "../components/Button";
import { useDispatch } from "react-redux";
import { registerSucess } from "../redux/userSlice";

const Register = () => {
  const inputStyle =
    "appearance-none rounded-lg relative block w-full px-3 py-4 border border-gray-300 focus:outline-none placeholder:text-2xl text-3xl md:text-2xl";

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const { userName, email, mobileNumber, password } = formData;

  const navigate = useNavigate();

  const passwordToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(registerSucess({ userName, email, mobileNumber }));
    try {
      // getting this value from getAuth
      const auth = getAuth();

      // registering the user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // getting the user information
      const user = userCredential.user;

      // updating the display name
      updateProfile(auth.currentUser, {
        displayName: userName,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Account successfully registered");
      setLoading(false);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.warning("Email has already been registered");
        setLoading(false);
        return;
      } else if (error.code === "auth/weak-password") {
        toast.warning("Use a strong password");
        setLoading(false);
        return;
      } else {
        toast.error("something went wrong with registeration. Try again");
      }
      setLoading(false);
    }
  };

  return (
    <section>
      <main className="flex items-center justify-center">
        <div className="max-w-4xl w-full mt-44">
          <div className="max-w-4xl w-full space-y-5">
            <h2 className="text-center text-6xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <form className="space-y-4" onSubmit={submitForm}>
              <input
                type="name"
                placeholder="Full Name"
                id="userName"
                name="userName"
                value={userName}
                className={inputStyle}
                onChange={onChange}
              />
              <input
                type="email"
                placeholder="Email address"
                autoComplete="email"
                id="email"
                name="email"
                className={inputStyle}
                value={email}
                onChange={onChange}
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="current-password"
                  id="password"
                  name="password"
                  value={password}
                  className={inputStyle}
                  onChange={onChange}
                />
                {!showPassword && (
                  <FaEye
                    className="absolute top-5 right-1 mr-2 cursor-pointer"
                    size={15}
                    color="#1e1e1e"
                    onClick={passwordToggle}
                  />
                )}
                {showPassword && (
                  <FaEyeSlash
                    className="absolute top-5 right-1 mr-2 cursor-pointer"
                    size={15}
                    color="#1e1e1e"
                    onClick={passwordToggle}
                  />
                )}
              </div>
              <input
                type="tel"
                placeholder="Mobile Number"
                id="mobileNumber"
                name="mobileNumber"
                value={mobileNumber}
                className={inputStyle}
                onChange={onChange}
              />
              <div>
                {loading ? (
                  <div className="group relative w-full flex justify-center border border-transparent py-3 text-3xl font-medium rounded-md text-white bg-primary focus:outline-none">
                      <Spinner />
                  </div>
                ) : (
                  <InputButton text="Sign up" />
                )}
              </div>
            </form>

            <p className="text-center text-3xl">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-700 underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;
