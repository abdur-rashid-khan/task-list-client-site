import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import googleIcon from '../../../assets/img/google.png'
import { useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import UseToken from "../../Hook/UseToken/UseToken";
import Loading from "../../Loading/Loading";


const LoginWithOther = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const form = location.state?.from?.pathname || "/";
  let errorElement = "";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
  // token hook
  const [token] = UseToken(user || fbUser);
  // facebook login
  const fbLogIn = () => {
    signInWithFacebook()
  }
  // for google
  const loginWithGoogle = () => {
    signInWithGoogle();
  };


  useEffect(() => {
    if (user || fbUser) {
      navigate(form, { replace: true });
      Swal.fire("Login successfully", "", "success");
    }
  }, [user, fbUser, navigate, form])


  // useEffect(() => {
  //   if (token) {
  //     navigate(form, { replace: true });
  //     Swal.fire("Login successfully", "", "success");
  //   }
  // }, [token, navigate, form])


  if (loading || fbLoading) {
    return <Loading></Loading>;
  }


  if (error || fbError) {
    errorElement = <p className="text-red-600">Error:{error?.message} </p>;
  }


  return (
    <div className="">
      {errorElement}
      <div className="flex flex-col w-full border-opacity-0">
        <div className="divider">OR</div>
      </div>
      <div className="flex items-center justify-center justify-items-center gap-4">
        <div className="google hover:bg-slate-400 hover:text-white rounded border bg-slate-300 w-full">
          <button onClick={loginWithGoogle}>
            <span className="flex items-center pt-2 text-center ">
              <img style={{ width: '45px', height: '45px' }} src={googleIcon} alt="google icon" />
              <span className="capitalize text-slate-800 font-serif font-semibold">login with google</span>
            </span>
          </button>
        </div>
        {/* <div className="google">
          <button onClick={fbLogIn}>
            <img style={{ width: '36px', height: '36px' }} src={fbIcon} alt="fb icon" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default LoginWithOther;