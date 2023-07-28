const example= [{data:'<h1>titulo</h1>',type:'headings'},{data:'<h3>titulo</h3>',type:'basic Block'},{data:'<h3>block1</h3>',type:'block2'},{data:'<h3>block3</h3>',type:'basic Block'},{data:'<h3>block3</h3>',type:'basic Block'}]
 
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



