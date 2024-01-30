import { arr } from "/data.js";

let socket = io();

const form = document.querySelector("form");
const inputAddress = document.getElementById("address");
const inputMessage = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const indexOfAdress = arr.findIndex((obj) => obj.user == inputAddress.value);
  console.log(inputAddress.value);
  if (indexOfAdress >= 0) {
    const d = new Date();
    const year = `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()}`;
    const time = `${d.getHours()}: ${d.getMinutes()}`;
    arr[indexOfAdress].messages.push(
      `${year} ${time} => ${inputMessage.value}`
    );
    socket.emit("newMessage", {
      inputAddress: inputAddress.value,
      inputMessage: inputMessage.value,
    });
    window.alert(`Message send sucesfully to: ${arr[indexOfAdress].user}`);
    inputAddress.value = "";
    inputMessage.value = "";
    inputAddress.blur();
    inputMessage.blur();
  } else {
    window.alert("USER UNDEFINED");
    inputAddress.focus();
  }
  //window.alert(inputAddress.value);
});
