import * as fs from 'fs';

export const logging = (text: string) => {
  fs.promises.appendFile('./logs/log-data.log', `${text}\n`);
  console.log(text); // eslint-disable-line
}

export const loggingError = (text: string) => {
  // const globalState = {};
  // fs.writeFileSync('./crash-data.log', JSON.stringify(globalState));
  // fs.writeFileSync('./logs/crash-data.log', text); // можно и через fs.promises.appendFile
  fs.promises.appendFile('./logs/crash-data.log', `${text}\n`);
  console.error(text); // eslint-disable-line
}
