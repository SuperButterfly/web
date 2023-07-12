const onsliceFiles = (screenEditorFiles, index, files ) => {
  const newscreen = [...screenEditorFiles]
  newscreen[index] = files
  if(files.length > 0){
    return newscreen
  } else {
    const newfiles= newscreen.filter(e => e.length !== 0)
    return newfiles
  }
}

export default onsliceFiles