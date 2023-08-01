const getCurrentDateTime = () => {
  const currentDate = new Date();
  const formattedDateTime = currentDate.toUTCString();
  return formattedDateTime;
};

export const generateNewFile = (target) => {
  return {
    file: `${target.file}-${getCurrentDateTime()}jsx`,
    name: `sin-Titulo-${target.file[0]}.jsx`,
    language: target.language,
    text: '',
    icons: 'react'
  }
}

export const generateNewTerminal = (target) => {
  return {
    file: `${target.file}-${getCurrentDateTime()}jsx`,
    name: `sin-Titulo.Terminal`,
    language: 'javascript',
    text: '',
    icons: 'terminal'
  }
}