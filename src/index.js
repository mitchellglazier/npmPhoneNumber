const digitsOnly = /^\d+$/;

// function to mask digits into US phone format
function maskUSPhone(phone) {
  // returning null when getting null, undefined, or an object that is no string as a parameter
  if (!phone || typeof phone !== "string") {
    return null;
  }

  if (digitsOnly.test(phone) === false || phone.length !== 10) {
    return phone;
  }

  // returning the masked value
  const codeArea = phone.substring(0, 3);
  const prefix = phone.substring(3, 6);
  const sufix = phone.substring(6, 10);
  return `(${codeArea}) ${prefix}-${sufix}`;
}

export default maskUSPhone;
