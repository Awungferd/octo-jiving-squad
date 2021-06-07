let animals = [
    "leopard",
    "lion",
    "gazelle",
    "goat",
    "hippopo",
    "rhino",
    "boar",
    "sivet"
]
for (let index = 0; index < animals.length; index++) {
    template = {
        id: index + 1,
        animal: animals.sort()[index],
        type: "",                  
        }
        


    console.log(template)
    // if (template.id%2===0) { return template.type="Holy cow"

    // } else{return template.type= "Shake it more"}

    }