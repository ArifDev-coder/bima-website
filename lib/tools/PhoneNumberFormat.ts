export const PhoneNumberFormat = (val: string) => {
  if (!val) return val;

  const phoneNumber = val.replace(/[*\d]/g, "");

  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 5) return phoneNumber;

  if (phoneNumberLength < 9) {
    return `${phoneNumber.slice(0, 4)}-${phoneNumber.slice(4)}`;
  }

  return `${phoneNumber.slice(0, 4)}-${phoneNumber.slice(4, 8)}-${phoneNumber.slice(8,12)}`
};
