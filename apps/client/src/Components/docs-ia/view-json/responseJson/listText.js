
export const listText=(data)=>{ 
  let idData = {};
  data.forEach((item, index) => {
  
      idData[`T${index}`] = {
        order: index,
        type: item.type,
        data: item.data,
        gptAt: '',
        updatedAt: '',
        createdAt: new Date(),
      };
   
  });
   return idData
}
export const listCode=(data )=>{   
    const datas={}
    data.fotEach((data,index) =>{
        if(index!==0){
            datas[`C${index}`]={  order: index,
                type:  data.type ,
                data: {
                    curl: {},
                    ruby: {}
                 },
                 gptAt: '',
                 updatedAt: '',
                 createdAt: ''}
        } 
    })
   return datas 
}




 

