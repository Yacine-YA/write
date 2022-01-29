export interface Message {
  text: string;
  date: string;
  id: number;
}

var messages: Message[] = [
 
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
