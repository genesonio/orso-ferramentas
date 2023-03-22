import { signIn } from "next-auth/react";

import type { NextPage } from "next/types";

const Login: NextPage = () => {
  return (
    <input
      type="button"
      value="login"
      onClick={() => {
        signIn("auth0", { callbackUrl: "/admin" })
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
      }}
    />
  );
};

export default Login;
