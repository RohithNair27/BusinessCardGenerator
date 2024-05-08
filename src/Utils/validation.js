export const EmailValidation = email => {
  const emailPattern = /^[\w.-]+@([\w-]+\.)+[\w]{2,4}$/;

  if (emailPattern.test(email)) {
    return true;
  } else {
    return {
      heading: 'Error',
      messsage: 'Please enter valid email',
    };
  }
};

export const PasswordValidation = Password => {
  const emailPattern = /^.{6,}$/;

  if (emailPattern.test(Password)) {
    return true;
  } else {
    return {
      heading: 'Error',
      messsage: 'Password contain 6 letters',
    };
  }
};
