const user = {
  id: 1,
  name: "John",
  age: 25,
};
const localUserCookie = (user) => {
  const getName = JSON.stringify(Object.keys({user})[0]);
  const userName = JSON.stringify(user);
  return localStorage.setItem(getName, userName);
}

localUserCookie(user);

const printCookie = (nameItem) => {
  let cookie = JSON.parse(localStorage.getItem(nameItem));
  console.log(cookie)
}

printCookie("user");