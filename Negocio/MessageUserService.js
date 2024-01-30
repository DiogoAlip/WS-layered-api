import { MessageUser } from "../DAL/MessageUser";
export const MessageUserService = {
  saveNewUser: (message, user) => {
    if (user.user == "") throw "USER NOT FOUND";
    if (user.message == "") throw "MESSAGE VOID";
    if (user.user == "@") {
      MessageUser.saveNewMessageGlobal(message);
    } else {
      MessageUser.saveNewMessage(message, user);
    }
  },
};
