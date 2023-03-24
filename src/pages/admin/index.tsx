import { useSession } from "next-auth/react";
import { useState } from "react";

import Login from "../../components/LoginButton";
import Logout from "../../components/LogoutButton";
import NaturalImage from "../../components/NaturalImage";
import Upload from "../../components/Upload";
import useAdminAuth from "../../utils/useAdminAuth";

const Admin = () => {
  const [panel, setPanel] = useState<"upload" | "manage">("upload");

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
          <div className="flex w-screen items-center justify-between px-10 pt-2">
            <div className="flex w-max items-center gap-x-4">
              {session && session.user.image && (
                <div className="w-32">
                  <NaturalImage
                    className="rounded-full"
                    src={session?.user.image}
                    alt=""
                  />
                </div>
              )}
              <h1>Olá, {session?.user.name}</h1>
            </div>
            <Logout className="h-9 cursor-pointer rounded-2xl border-2 border-[#666] py-1 px-3 font-bold shadow shadow-[#272727] transition-all hover:translate-y-[-1px] hover:shadow-md hover:shadow-[#272727] active:translate-y-[1px] active:shadow-sm active:shadow-[#272727]" />
          </div>
          <div className="mb-6 flex gap-x-4">
            <button
              className={panel == "upload" ? "font-bold" : ""}
              onClick={() => setPanel("upload")}
            >
              Upload
            </button>
            <button
              className={panel == "manage" ? "font-bold" : ""}
              onClick={() => setPanel("manage")}
            >
              Manage
            </button>
          </div>
          {panel === "upload" && <Upload />}
        </>
      )}
    </>
  );
};

export default Admin;
