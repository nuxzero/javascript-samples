import { add } from './calculator';

const printMessage = (message: string): void => {
  console.log(message);
};

console.log(add(1, 2));

printMessage('Hello world!');
