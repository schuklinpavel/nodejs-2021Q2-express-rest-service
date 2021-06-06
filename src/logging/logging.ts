import * as fs from 'fs';

export const logging = (text: string) => {
  fs.promises.appendFile('./log-data.log', `${text}\n`);
  console.log(text); // eslint-disable-line
}

export const loggingError = (text: string) => {
  // const globalState = {};
  // fs.writeFileSync('./crash-data.log', JSON.stringify(globalState));
  fs.writeFileSync('./crash-data.log', text); // можно и через fs.promises.appendFile
  console.error(text); // eslint-disable-line
}
