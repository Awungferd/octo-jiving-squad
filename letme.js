let events = 
  [  {
        date: 'July 21,1983',
        remark: "Started writing Voices on the Margins: Lost Children of Isis "
    },
   {
        date: 'July 22,1983',
        remark: "Terra Nobilis, Terra Nostra! "
    },
    {
        date: 'July 23,1983',
        remark: "The redemption of Silas Manner"
    },
    {
        date: 'July 24,1983',
        remark: "Our Birth is our death begun?"
    }, {
        date: 'July 25,1983',
        remark: "Relived Archimedes' Eureka moment"
    }, {
        date: 'July 26,1983',
        remark: "Finished reading 'Tropical Lapoon'"
    }, {
        date: 'July 27,1983',
        remark: "Wow! I'm alive!"
    }, {
        date: 'July 28,1983',
        remark: "Unforgetable experience feeding the swans"
    }, {
        date: 'July 29,1983',
        remark: "Retraced the footsteps of the victims"
    }, {
        date: 'July 30,1983',
        remark: "finished writing the poem 'The Winged Coins'"
    }, {
        date: 'July 31,1983',
        remark: "Kissed him and the month away. Looking forward to new beginnings with August"
    },
 ]

let month = new Date ("July 21,1983").toLocaleDateString();
const act =events.reduce(function (acc,entry) {
  
    return "This is the story", {...acc,[entry.date]:entry.remark}
},{})
    
    console.log("'Mary wrote':", act["July 26,1983"], )
        
    
    
