import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'redux/contactSlice';
import { deleteToken } from 'redux/TokenSlice';
import { deleteProfileData } from 'redux/ProfileSlice';
import { notify } from 'components/Notify/notify';
export const LogOut = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const profileEmail = useSelector(state => state.profile.email);
  const handleLogout = async () => {
    logout(token)
      .then(() => {
        dispatch(deleteProfileData());
        dispatch(deleteToken());
      })
      .then(() => navigate('/'))
      .then(() => notify('logOut'))
      .catch(() => {
        notify('Upps');
      });
  };
  return (
    <div>
      <p>{profileEmail}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
