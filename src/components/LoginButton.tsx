import { signIn } from "next-auth/react";

import type { FC } from "react";

type CustomButton = React.HTMLAttributes<HTMLInputElement>;

const Login: FC<CustomButton> = ({ ...props }) => {
  return (
    <input
      {...props}
      type="button"
      value="Login"
      onClick={() => {
        signIn("auth0")
          .then(() => console.log("login"))
          .catch((err) => console.error(err));
      }}
    />
  );
};

export default Login;
