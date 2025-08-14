export const validateUserRegistration = (data) => {
  const { name, mob_no, email, password, user_type } = data;

  if (!name || !password || !user_type) {
    throw new Error("Name, password, and user type are required");
  }

  if (user_type === "individual" && !mob_no) {
    throw new Error("Mobile number is required for individual users");
  }

  if (user_type === "business" && !email) {
    throw new Error("Email is required for business users");
  }
};
