import moment from "moment";

// function that returns true if value is email, false otherwise
export const verifyEmail = (value) => {
  var emailRex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRex.test(value);
};
// function that verifies if a string has a given length or not
export const verifyLength = (value, length) => {
  return value.length === length;
};

export const verifyNumber = (value) => {
  var numberRex = new RegExp("^[0-9]+$");
  return numberRex.test(value);
};

export const verifyFloat = (value) => {
  var floatRex = new RegExp("^(?=.)([+-]?([0-9]*)(.([0-9]+))?)$");
  return floatRex.test(value);
};

export const verifyPincode = (value) => {
  var pinRex = new RegExp("^[0-9]{6}$");
  return pinRex.test(value);
};

export const verifyPhone = (value) => {
  var phoneRex = new RegExp("^[0-9]{10,11}$");
  return phoneRex.test(value);
};

export const verifyMobile = (value) => {
  var mobileRex = new RegExp("^[0-9]{10}$");
  return mobileRex.test(value);
};

export const verifyIfsc = (value) => {
  var ifscRex = new RegExp("^[A-Za-z]{4}[a-zA-Z0-9]{7}$");
  return ifscRex.test(value);
};

export const verifyCIN = (value) => {
  var cinRex = new RegExp("^[a-zA-Z0-9]{21}$");
  return cinRex.test(value);
};

export const verifyName = (value) => {
  var nameRex = new RegExp("^[-_ a-zA-Z0-9]{1,150}$");
  return nameRex.test(value);
};

export const verifyAlpha = (value) => {
  var alphaRex = new RegExp("^[ A-Za-z]{1,250}$");
  return alphaRex.test(value);
};

export const verifyTIN = (value) => {
  var tinRex = new RegExp("^[0-9]{11}$");
  return tinRex.test(value);
};

export const verifyState = (value) => {
  var stateRex = new RegExp("^[ A-Za-z]{2,30}$");
  return stateRex.test(value);
};

export const verifyPan = (value) => {
  var panRex = new RegExp("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$");
  return panRex.test(value);
};

export const verifyDate = (value) => {
  const date = new RegExp(
    "^([0-9]){4}-([0-9]){2}-([0-9]){2}|([0-9]){4}/([0-9]){2}/([0-9]){2}|([0-9]){2}/([0-9]){2}/([0-9]){4}$"
  );
  return date.test(value);
};

export const verifyString = (value) => {
  const string = new RegExp("[-_ a-zA-Z0-9]{1,250}");
  return string.test(value);
};

// verifies if value is a valid URL
export const verifyUrl = (value) => {
  try {
    new URL(value);
    return true;
  } catch (_) {
    return false;
  }
};

export const getUrlName = (url) => {
  try {
    const urlObject = new URL(url);
    const hostname = urlObject.hostname;
    const urlName = hostname.replace("www.", "");
    return capitalize(urlName.slice(0, hostname.indexOf(".")));
  } catch (err) {
    return url;
  }
};

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));


export const b64ToBlob = (b64Data, contentType = "", sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

export const getUserName = (email) => {
  return email.substring(0, email.indexOf("@"));
};
