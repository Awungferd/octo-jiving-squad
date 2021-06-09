let events = [
    {
        id: null,
        date: 'July 1,1983',
        remark: "Started writing Voices on the Margins: Lost Children of Isis "
    },
    {
        id: 02,
        date: 'July 2,1983',
        remark: "Terra Nobilis, Terra Nostra! "
    },
    {
        id: 03,
        date: 'July 3,1983',
        remark: "The redemption of Silas Manner"
    },
    {
        id: 04,
        date: 'July 4,1983',
        remark: "Our Birth is our death begun?"
    }, {
        id: 05,
        date: 'July 5,1983',
        remark: "Relived Archimedes' Eureka moment"
    }, {
        id: 06,
        date: 'July 6,1983',
        remark: "Finished reading 'Tropical Lapoon'"
    }, {
        id: 07,
        date: 'July 7,1983',
        remark: "Wow! I'm alive!"
    }, {
        id: 08,
        date: 'July 8,1983',
        remark: "Unforgetable experience feeding the swans"
    }, {
        id: 09,
        date: 'July 9,1983',
        remark: "Retraced the footsteps of the victims"
    }, {
        id: 10,
        date: 'July 10,1983',
        remark: "finished writing the poem 'The Winged Coins'"
    }, {
        id: 11,
        date: 'July 11,1983',
        remark: "Kissed a butterfly that came through the window bars and rested on this lonely cactus in a pot"
    }, {
        id: 12,
        date: "July 12,1983",
        remark: "Tell me not, in mournful numbers. Life is but an empty dream!"
    }, {
        id: 13,
        date: "July 13,1983",
        remark: "For the soul is dead that slumbers. And things are not what they seem."
    }, {
        id: 14,
        date: "July 14,1983",
        remark: "Life is real! Life is earnest! And the grave is not its goal;"
    }, {
        id: 15,
        date: "July 15,1983",
        remark: "Dust thou art, to dust returnest, Was not spoken of the soul."
    }, {
        id: 16,
        date: "July 16,1983",
        remark: "Not enjoyment, and not sorrow, Is our destined end or way;"
    }, {
        id: 17,
        date: "July 17,1983",
        remark: "But to act, that each to-morrow Find us farther than to-day."
    }, {
        id: 18,
        date: "July 18,1983",
        remark: "Art is long, and Time is fleeting, And our hearts, though stout and brave"
    }, {
        id: 19,
        date: "July 19,1983",
        remark: "Still, like muffled drums, are beating Funeral marches to the grave."
    }, {
        id: 20,
        date: "July 20,1983",
        remark: "In the world’s broad field of battle, In the bivouac of Life,"
    }, {
        id: 21,
        date: "July 21,1983",
        remark: "Be not like dumb, driven cattle! Be a hero in the strife!"
    }, {
        id: 22,
        date: "July 22,1983",
        remark: "Trust no Future, howe’er pleasant! Let the dead Past bury its dead!"
    }, {
        id: 23,
        date: "July 23,1983",
        remark: "Act, —act in the living Present! Heart within, and God o’erhead!"
    }, {
        id: 24,
        date: "July 24,1983",
        remark: "Lives of great men all remind us We can make our lives sublime,"
    }, {
        id: 25,
        date: "July 25,1983",
        remark: "And, departing, leave behind us Footprints on the sands of time;"
    }, {
        id: 26,
        date: "July 26,1983",
        remark: "Footprints, that perhaps another, Sailing o’er life’s solemn main,"
    }, {
        id: 27,
        date: "July 27,1983",
        remark: "A forlorn and shipwrecked brother, Seeing, shall take heart again."
    }, {
        id: 28,
        date: "July 28,1983",
        remark: "Let us, then, be up and doing, With a heart for any fate;"
    }, {
        id: 29,
        date: "July 29,1983",
        remark: "Still achieving, still pursuing, Learn to labor and to wait."
    }, {
        id: 30,
        date: "July 30,1983",
        remark: "And my dear Diary, that was a mind full of Longfellow!"
    }, {
        id: 31,
        date: "July 31,1983",
        remark: "I can now kiss July goodnight and goodbye. Welcome August"
    },
]


// PRINT EVENT
let eventPrint = events.map(function (item, index) {


    return `On ${
        new Date(item.date).toLocaleDateString()
    } Mary confided in her diary thus: "${
        item.remark
    }"`

})
console.log(eventPrint[0])
// console.log(eventPrint[10])

// let month = new Date().toLocaleDateString()
// function printDate(text) {
//      console.log(text)

// }
// printInfo("July 25,1983")
//=================================
// let enteries = events.reduce(function (acc,curr,any){
//     return "This is the story", {...acc,[curr.id]:curr.remark}

// },{})
// console.log(`on  she wrote ${enteries[11]}`)
