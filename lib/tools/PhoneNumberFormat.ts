export const PhoneNumberFormat = (val: string, separator: string) => {
  if (!val) return "";

  const cleaned = ("" + val).replace(/\D/g, "");

  const match = cleaned.match(/^(\d{3})(\d{4})(\d{3,5})$/);

  if (match) {
    return `${match[1]}${separator}${match[2]}${separator}${match[3]}`;
  }

  return cleaned;
};
