const fs = require('fs');

const deleteDirectory = (path)=>{

  fs.access(path,fs.constants.F_OK,(error)=>{
    if(error){
      throw new Error(error)
    }
  })  
  fs.readdir(path,(error,files)=>{
    //let response = {};
    if(error){
      throw new Error(error)
    }
   
    files.forEach(file=>{
      const currentPath = `${path}/${file}`;
      fs.stat(currentPath,(errorStat,estadisticas)=>{
        if(errorStat)
          throw new Error(errorStat)
        if(estadisticas.isDirectory()){
          deleteDirectory(currentPath)
        }else{
          fs.unlink(currentPath,errorUnlink=>{
            if(errorUnlink)
              throw new Error(errorUnlink)
          })
        }
      })
    })
  })
  return "ok"
  //return {dirname: __dirname}
}

module.exports={deleteDirectory}