import auth from '@react-native-firebase/auth';

export const signUpFirebase = (Email_id, Password) => {
  auth()
    .createUserWithEmailAndPassword(Email_id, Password)
    .then(() => {
      return 'User account created & signed in!';
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        return 'That email address is already in use!';
      }

      if (error.code === 'auth/invalid-email') {
        return 'That email address is invalid!';
      }

      console.error(error);
    });
};
