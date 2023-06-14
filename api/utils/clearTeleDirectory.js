const fs = require('fs');

const pathComponent='../../project/components';
const pathPages ='../../project/pages';

const deleteDirectory = (path)=>{

  fs.readdir(path,(error,files)=>{
    //let response = {};
    if(error)
      return {error}
    files.forEach(file=>{
      const currentPath = `${path}${file}`;
      fs.stat(currentPath,(errorStat,estadisticas)=>{
        if(errorStat)
          return {error:errorStat}
        if(estadisticas.isDirectory()){
          deleteDirectory(currentPath)
        }else{
          fs.unlink(currentPath,errorUnlink=>{
            if(errorUnlink)
              return {error:errorUnlink}
          })
        }
      })
    })
    return {message:"File deleted successfully"}
  })
}

module.exports={deleteDirectory}