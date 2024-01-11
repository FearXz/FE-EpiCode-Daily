import ProfileHeader from "./ProfileHeader";
import ProfileMain from "./ProfileMain";

function Profile(props) {
  return (
    <>
      <div className="bg-darkgray" data-bs-theme="dark">
        <ProfileHeader />
        <ProfileMain />
      </div>
    </>
  );
}

export default Profile;
