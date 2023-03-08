import http from "./http";

export const createUserApi = async (body) => {
  const { firstName, lastName, email, password, role } = body;

  const user = await http.post("/users", {
    firstName,
    lastName,
    email,
    password,
    role,
  });
  return user;
};