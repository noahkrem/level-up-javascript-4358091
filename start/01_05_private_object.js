// Write your code here

const Username = Symbol("Username");
const Password = Symbol("Password");

const User = {
  [Username]: "noahkrem",
  [Password]: "123Pwd",
  Age: 21
};

console.log(User.Username);
console.log(User.Password);