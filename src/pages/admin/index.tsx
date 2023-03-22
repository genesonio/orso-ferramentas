import { useSession } from "next-auth/react";
import useAdminAuth from "../../utils/useAdminAuth";

const Admin = () => {
  const { data: session } = useSession();
  const auth: boolean | undefined = useAdminAuth(session?.user?.email);
  return <>{auth && <h1>Parabéns tu é o adm</h1>}</>;
};

export default Admin;
