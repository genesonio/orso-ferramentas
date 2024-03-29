import getAdmins from "./getAdmEmail"

const useAdminAuth = ( email: string | null | undefined ) => {
  const admins: string[] | undefined = getAdmins()
  if ( !email ) return false
  return admins?.includes( email )
}

export default useAdminAuth
