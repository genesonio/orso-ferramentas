import { api } from "./api"

const getAdmins = () => {
  const adminEmail: string[] = []
  const { data } = api.user.listAdmin.useQuery()
  if ( !data ) return
  data.map( user => adminEmail.push( user.email as string ) )
  return adminEmail
}
export default getAdmins
