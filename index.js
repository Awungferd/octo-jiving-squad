let animals=["leopard","lion","gazelle","goat","hippopo","rhino","boar","sivet"]

// const animalObj = animals.reduce((x,y,)=>{// acc=init val, x =current position, y=counter
//     let template = {id: "", name:"", status:""}
// template.id= Math.random(0.5*1000)., template.name=y, template.status="Endangered!"
//     console.log("This Object goes...",template)
// }) 
let template = {id:"", name:"",status:""}
const animalia = animals.reduce((acc, current,counter,array)=>{
    template.name=current, template.id=counter;
    console.log(template)
         let even =template.id%2===0
           if (even===true) {return template.status="Endangered, don't kill it!"
         } else {return template.status= "Good game for a pot of soup!"}
                  
        

} ,"","")

