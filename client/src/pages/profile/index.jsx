import { useAppStore } from "@/store"

const Profile = () => {
  const { userInfo } = useAppStore();
  return (
    <div>
      <h2>Profile</h2>
      <div>Email: { userInfo.id }</div>
    </div>
  )
}

export default Profile