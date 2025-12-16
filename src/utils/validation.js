export const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

export const validatePhone = (phone) => {
  const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  return phonePattern.test(phone);
};

// Formats a string as 123-456-7890 and strips non-numeric characters
export function formatPhoneInput(value) {
  const digits = value.replace(/\D/g, "");
  const match = digits.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  let formatted = "";
  if (match) {
    if (match[1]) formatted += match[1];
    if (match[2]) formatted += (match[2] ? "-" : "") + match[2];
    if (match[3]) formatted += (match[3] ? "-" : "") + match[3];
  }
  return formatted;
}
