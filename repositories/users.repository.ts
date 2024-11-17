const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  console.log("login user in user repository");
};

const register = async ({
  name,
  email,
  password,
  phoneNumber,
  address,
}: {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
}) => {
  console.log(
    "register user with: name:" +
      name +
      " email:" +
      email +
      " password:" +
      password +
      " phone:" +
      phoneNumber +
      " address:" +
      address
  );
};

export default {
  login,
  register,
};
