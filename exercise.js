const user = {
  id: 1,
  name: "John",
  age: 25,
};
const localUserCookie = (user) => {
  const userName = JSON.stringify(user);
  return localStorage.setItem("user", userName);
}

localUserCookie(user);

const printCookie = (nameItem) => {
  let cookie = JSON.parse(localStorage.getItem(nameItem));
  console.log(cookie)
}

printCookie("user");