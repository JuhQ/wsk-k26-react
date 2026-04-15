import { useEffect, useState } from 'react';
import { useUser } from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState(null);
  const { getUserByToken } = useUser();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');
      const userResponse = await getUserByToken(token);
      setUser(userResponse.user);
    };

    getUser();
  }, []);

  return (
    <>
      {user && (
        <>
          <h2>Profile</h2>
          <p>Username: {user.username}</p>
        </>
      )}
    </>
  );
};
export default Profile;
