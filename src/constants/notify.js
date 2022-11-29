import { toast } from 'react-toastify';

const success = {
  position: 'bottom-right',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
};
const warn = {
  position: 'bottom-right',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
};

const notifictationOptions = { success, warn };

export const notify = toShown => {
  if (toShown === 'addContact') {
    return toast.success(
      ' You have added the contact!',
      notifictationOptions.success
    );
  }
  if (toShown === 'dellContact') {
    return toast.warn(
      'You have dellated the contact!',
      notifictationOptions.warn
    );
  }
  if (toShown === 'editContact') {
    return toast.success(
      'Your contact has been edited!',
      notifictationOptions.success
    );
  }
  if (toShown === 'wellcome') {
    return toast.success(' Wellcome!', notifictationOptions.success);
  }
  if (toShown === 'errorRegistration') {
    return toast.warn(
      'This email address is already to be taken',
      notifictationOptions.warn
    );
  }
  if (toShown === 'logOut') {
    return toast.warn('You have log Out', notifictationOptions.warn);
  }
  if (toShown === 'Upps') {
    return toast.warn(
      'Upps... please press F5 and try again',
      notifictationOptions.warn
    );
  }
  if (toShown === 'errorLogIn') {
    return toast.warn(
      'Please check your email or password and try again',
      notifictationOptions.warn
    );
  }
};
