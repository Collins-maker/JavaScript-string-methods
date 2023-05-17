function protectEmail(email) {
  // Split the email address into local part and domain
  const [first_part, domain] = email.split('@');

  // Get the first three characters of the local part
  const protectedfirst_part = first_part.slice(0, 5);

  // Create the protected email address
  const protectedEmail = `${protectedfirst_part}...@${domain}`;

  return protectedEmail;
}

//checking the functionality of the email
console.log(protectEmail("robin_singh@example.com"));
// Output: "robin...@example.com"
