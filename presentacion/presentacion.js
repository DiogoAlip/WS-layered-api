import { MessageUserService } from "../Negocio/MessageUserService";
//import { message_users } from "../DAL/messages_users_DB.js";

let socket = io();

const form = document.querySelector("form");
const inputAddress = document.getElementById("address");
const inputMessage = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = MessageUserService.geUser(inputAddress.value);
  /* const indexOfAdress = message_users.findIndex(
    (obj) => obj.user == inputAddress.value
  ); */
  if (user) {
    const d = new Date();
    const year = `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()}`;
    const time = `${d.getHours()}: ${d.getMinutes()}`;
    MessageUserService.saveNewMessage(
      `${year} ${time} => ${inputMessage.value}`,
      inputAddress.value
    );
    /*     message_users[indexOfAdress].messages.push(
      `${year} ${time} => ${inputMessage.value}`
    ); */
    socket.emit("newMessage", {
      inputAddress: inputAddress.value,
      inputMessage: inputMessage.value,
    });
    window.alert(`Message send sucesfully to: ${user.user}`);
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
