let animals=["leopard goat","lion hearted","gazelle gait","goat","hippopo","rhino","boar","sivet"]
// const item = animals[Math.floor(Math.random() * animals.length)];
// console.log(item)
 
let template = {id:"", name:"",status:""}
const animalia = animals.reduce((acc, current,counter,array)=>{
    template.name=current, template.id=counter;
    console.log(template)
         let even =template.id%2===0
           if (even===true) {return template.status="Endangered, don't kill it!"
         } else {return template.status= "Good game for a pot of soup!"}
                  
        

} ,"","")

 