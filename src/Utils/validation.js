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

export function isEmptyString(str) {
  const regex = /^(?!\s*$).+/;
  if (regex.test(str)) {
    return true;
  } else {
    return {
      heading: 'Error',
      messsage: 'Kindly enter data',
    };
  }
}
export function isPersonalWebsite(str) {
  const regex = /(http(s)?)?([\w-]+\.)+[\w-]+([\w- ;,./?%&=]*)?/;
  if (regex.test(str)) {
    return true;
  } else {
    return {
      heading: 'Error',
      messsage: 'Please enter a valid website',
    };
  }
}

export function isValidPhoneNumber(str) {
  const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  if (regex.test(str)) {
    return true;
  } else {
    return {
      heading: 'Error',
      messsage: 'Please enter a valid number',
    };
  }
}
