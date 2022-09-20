import { useEffect, useState, useRef } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../firebase.config";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { registerSucess } from "../redux/userSlice";

const Profile = () => {
  const profileName =
    "appearance-none rounded-none relative block w-full px-3 py-2 text-3xl md:text-2xl bg-transparent focus:outline-none";
  const profileNameActive =
    "appearance-none rounded-none relative block w-full px-3 py-2 text-3xl md:text-2xl border-gray-500 border-b bg-transparent focus:outline-none";

  const auth = getAuth();

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    userNumber: "",
  });

  const textref = useRef(null);
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    mobileNumber: "",
  });

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      const userProfile = docSnap.data();
      setUser((prevState) => ({
        ...prevState,
        name: userProfile.userName,
        userNumber: userProfile.mobileNumber,
      }));
      setFormData((prevState) => ({
        ...prevState,
        userName: userProfile.userName,
        email: userProfile.email,
        mobileNumber: userProfile.mobileNumber,
      }));
    };
    fetchUserDetails();
  }, [auth.currentUser.uid]);

  const { name, userNumber } = user;
  const onSubmit = async () => {
    try {
      if (userName !== name || mobileNumber !== userNumber) {
        //update display name in fb
        await updateProfile(auth.currentUser, {
          displayName: userName,
          mobileNumber: mobileNumber,
        });
        dispatch(registerSucess({ ...formData }));
      } else if (userName === name && mobileNumber === userNumber) {
        toast.error("No changes was made", { toastId: "6yfvyuwevyufgvwefyuv" });
        return;
      }
      // update in firestore
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        userName: userName,
        mobileNumber: mobileNumber,
      });
      toast.success("Profile updated", { toastId: "6yfvyuwevyufgvwefyuv" });
    } catch (error) {
      toast.error("could not update profle details", {
        toastId: "6yfvyuwevyufgvwefyuv",
      });
    }
  };

  const onfocusElem = () => {
    textref.current.focus();
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const { userName, email, mobileNumber } = formData;

  return (
    <div className="">
      <div className="h-screen pt-">
        <header className="profile text-white pt-36 pb-4 text-2xl px-4">
          <p className="font-bold text-primary">Welcome {userName}</p>
          <p>{email}</p>
        </header>

        <main>
          <p className="pt-3 pb-1 px-4 text-3xl md:text-2xl">My Lfoods Account</p>
          <div className="px-4 py-7 mt-2 space-y-12 bg-white shadow text-3xl md:text-2xl">
            <p>
              <Link to="/orders">Orders</Link>
            </p>
            <p>
              <Link to="/favourites">Favourites</Link>
            </p>
          </div>
          <div>
            <p className="pt-3 pb-1 px-4 text-3xl md:text-2xl">Profile Details</p>
            <div className="px-4 py-7 mt-2 bg-white shadow">
              <form className="space-y-6 relative">
                <div className="flex">
                  <input
                    type="text"
                    id="userName"
                    className={!changeDetails ? profileName : profileNameActive}
                    disabled={!changeDetails}
                    value={userName}
                    onChange={onChange}
                    ref={textref}
                  />
                  {changeDetails && (
                    <span className="absolute left-40 text-gray-700 text-2xl">
                      <FaPen />
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  id="email"
                  className={!changeDetails ? profileName : profileNameActive}
                  disabled
                  readOnly
                  value={email}
                />
                <div className="flex ">
                  <input
                    type="tel"
                    id="mobileNumber"
                    className={!changeDetails ? profileName : profileNameActive}
                    disabled={!changeDetails}
                    autoFocus={changeDetails}
                    value={mobileNumber}
                    onChange={onChange}
                  />
                  {changeDetails && (
                    <span className="absolute left-40 text-gray-700 text-2xl">
                      <FaPen />
                    </span>
                  )}
                </div>
              </form>
            </div>
            <div className="flex items-center justify-center">
              <div className="max-w-xl w-full px-4 flex border-t border-gray-200 mt-10">
                <div className="border-b-4 w-full border-b-black text-center bg-black py-2 font-semibold  text-3xl text-primary cursor-pointer hover:bg-primary hover:text-white">
                  <p
                    className=""
                    onClick={() => {
                      changeDetails && onSubmit();
                      setChangeDetails((prevState) => !prevState);
                    }}
                  >
                    {changeDetails ? "done" : "edit details"}
                  </p>
                </div>
                <div className="bg-red-800 w-full text-gray-200 text-center py-2 font-semibold text-3xl cursor-pointer">
                  <button type="button" onClick={onLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
