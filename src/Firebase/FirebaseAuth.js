import auth from '@react-native-firebase/auth';

export const signUpFirebase = async (email, passorrd) => {
  return await auth()
    .createUserWithEmailAndPassword(email, passorrd)
    .then(async result => {
      return await result.user
        .updateProfile({
          displayName: 'Rohith Nair',
        })
        .then(function () {
          return 'User account created & signed in!';
        });
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        return 'That email address is already in use!';
      }

      if (error.code === 'auth/invalid-email') {
        return 'That email address is invalid!';
      }
    });
};

export const loginFirebase = async (email, password) => {
  return await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      return 'User exists!';
    })
    .catch(error => {
      console.log(error.code);
      if (error.code === 'auth/invalid-credential') {
        return 'Wrong credentials';
      }
    });
};

export const checkLoginStatus = () => {
  return new Promise((resolve, reject) => {
    auth().onAuthStateChanged(
      user => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      },
      error => {
        reject(error);
      },
    );
  });
};
