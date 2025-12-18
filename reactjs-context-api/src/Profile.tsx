import { useUser } from "./UserContext"

export default function Profile() {
  const user = useUser()
  return (<h1>Name: {user.name}</h1>)
}