import { useSession } from "next-auth/react";
import Login from "../../components/LoginButton";
import Logout from "../../components/LogoutButton";
import NaturalImage from "../../components/NaturalImage";
import useAdminAuth from "../../utils/useAdminAuth";

const Admin = () => {
  const { data: session } = useSession();
  const auth: boolean | undefined = useAdminAuth(session?.user?.email);
  return (
    <>
      {!auth && (
        <>
          <h1 className="my-8 text-xl">
            Olá, faça login para liberar o acesso!
          </h1>
          <Login className="cursor-pointer rounded-2xl border-2 border-[#666] py-1 px-3 font-bold shadow shadow-[#272727] transition-all hover:translate-y-[-1px] hover:shadow-md hover:shadow-[#272727] active:translate-y-[1px] active:shadow-sm active:shadow-[#272727]" />
        </>
      )}
      {auth && (
        <>
          <div className="flex w-36 flex-col gap-y-1">
            {session && session.user.image && (
              <NaturalImage
                className="rounded-full"
                src={session?.user.image}
                alt=""
              />
            )}
            <h1>
              Olá,
              <br />
              {session?.user.name}
            </h1>
          </div>
          <Logout className="cursor-pointer rounded-2xl border-2 border-[#666] py-1 px-3 font-bold shadow shadow-[#272727] transition-all hover:translate-y-[-1px] hover:shadow-md hover:shadow-[#272727] active:translate-y-[1px] active:shadow-sm active:shadow-[#272727]" />
        </>
      )}
    </>
  );
};

export default Admin;
