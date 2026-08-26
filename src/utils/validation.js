// Deliberately permissive: enough to catch a typo, never enough to reject a
// valid address. The only real check is whether the reply arrives.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

export function isEmail(value) {
  return EMAIL_PATTERN.test(value.trim());
}

export function isEmpty(value) {
  return value.trim() === "";
}
