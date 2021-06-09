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

    const charsTemp= {};
 function highestFreq(arr) {
for (let iterator = 0; iterator < events.length; iterator++) {
    const element = events[iterator];
    strOnCount=element.remark
   const arr= strOnCount.split(" ");

    let moFre=arr[0], maxRekon=0,i,j;
    let len=arr.length;
    for(i=0;i<len;i++){let count=0;
    for(j=i+1;j<len;j++){
        if(arr[i]==arr[j]){
            count++;
           
        }
    }
    if(maxRekon<count){
        maxRekon=count;
        moFre=arr[i];
        
    }
    }
    console.log (moFre);
}}
console.log(`The word with the highest frequency is: ${highestFreq()}`)
