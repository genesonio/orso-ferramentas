import { signOut } from "next-auth/react";

import type { FC } from "react";

type CustomButton = React.HTMLAttributes<HTMLInputElement>;

const Logout: FC<CustomButton> = ({ ...props }) => {
  return (
    <input
      {...props}
      type="button"
      value="Logout"
      onClick={() => {
        signOut()
          .then(() => console.log("login"))
          .catch((err) => console.error(err));
      }}
    />
  );
};

export default Logout;
