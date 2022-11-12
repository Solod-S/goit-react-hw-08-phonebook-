import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'redux/contactSlice';
import { deleteToken } from 'redux/TokenSlice';
import { deleteProfileData } from 'redux/ProfileSlice';
import { notify } from 'components/Notify/notify';
import { Name, Button, Wrapper } from './LogOut.styled';
export const LogOut = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const profileEmail = useSelector(state => state.profile.email);
  const handleLogout = () => {
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
    <Wrapper>
      <Name>{profileEmail}</Name>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Wrapper>
  );
};
