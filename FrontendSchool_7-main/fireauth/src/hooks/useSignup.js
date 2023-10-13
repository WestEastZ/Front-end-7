import { useState } from "react";
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  // 에러정보를 관리합니다.
  const [error, setError] = useState(null);

  // 통신 상태를 관리합니다.
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const signup = (email, password, displayName) => {
    console.log(createUserWithEmailAndPassword);
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        if (!user) {
          throw new Error("회원가입에 실패했습니다.");
        }

        // 회원 정보 업데이트 함수.
        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            dispatch({ type: "login", payload: user });
            setError(null);
            setIsPending(false);
          })
          .catch(() => {
            setIsPending(false);
            console.log(error);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(error);
      });
  };

  return { error, isPending, signup };
};
