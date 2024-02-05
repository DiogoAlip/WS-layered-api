import { message_users } from "./messages_users_DB.js";
export const MessageUser = {
  saveNewMessage: (message, user) => {
    message_users.find((e) => e.user == user).messages.push(message);
  },
  geUser: (userName) => {
    return message_users.find((e) => e.user == userName);
  },
  saveNewMessageGlobal: (message) => {
    message_users.forEach((e) => {
      e.messages.push(message);
    });
  },
};
