const fs = require('fs')
fs.readFile('test.txt', 'utf8' , (err, data) => {
  
    let template = {id:"", name:"",status:""}
function name (acc, current,counter,array) {
        template.name=current, template.id=counter;
        console.log(template)
             let even =template.id%2===0
               if (even===true) {return template.status="Endangered, don't kill it!"
             } else {return template.status= "Good game for a pot of soup!"}
                      
                
    } ,"","")
  console.log(template)
})
