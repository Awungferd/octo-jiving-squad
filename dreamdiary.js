class Diary {
    constructor(diary) {
        this.diary = diary
    }


    getEntry(){
    const entry = this.diary[0]
    console.log(`DATE: ${entry.date}, REMARKS ${entry.remark}`)
    console.log(`entry is: ${entry.remark}`)
   } 
    printRemarkFromOneDay(stringDate) {
    for (let i = 0; i < this.diary.length; i++) {
        const element = this.diary[i];
        if (element.date === stringDate) {
            console.log(`On ${stringDate},the dream was: ${element.remark}`)
           
        }
    }
}
//NEXT
printYearDatesEntries(){
    for (let index = 0; index < this.diary.length; index++) {
        const element = this.diary[index];
        console.log(  `element.date, " : ", element.remark`)
    }
}
//NEXT
printEventsRange(start, end) {
    const rangeEvents = this.diary.filter(diary => (diary.date >= start && diary.date <= end))
    console.log(rangeEvents)

}

//NEXT
// // SEARCH entries containing a key word = done
//   wordSearch(wordToSearch) {
//     let searchFor = wordToSearch;
//     const newEvents = this.diary.filter(function(event){
//         if(event.remark.includes(searchFor)) {
//             return true;
//         } else {
//             return false;
//         };
//     })
//     if (newEvents.length === 0) {
//         console.log(`Somehow she did not use the word,' ${searchFor}'`)
//     } else {
//         newEvents.forEach(function(event){
//             console.log(event)
//         })
//     }
// };

// NEXT
// - SEARCH FOR longest word (longest) = done

//  longestWordSearch(str) {

//     for (let xy = 0; xy < this.diary.length; xy++) {
//         const element = this.diary[xy];
//         str = element.remark
//     }
//     const longestWord = str.split(' ').reduce(function (longest, currentWord) {
//         return currentWord.length > longest.length ? currentWord : longest;
//     }, "");
//     const result = longestWord.length;
//     console.log(`Longest word: '${longestWord}'; Character length: ${result}`)
// }

//NEXT
    printEventsFromOneMonth(month){
        const newEvents = this.diary.filter(function(event){
        if(event.date.includes(month)) {
            return true;
        } else {
            return false;
        };
    })
        if (newEvents.length === 0) {
            console.log("No result")
        } else {
            newEvents.forEach(function(event){
            console.log(event)
        });
    }
};


    addNewEntry(newDate, entry) {
        let newEntry = { date: newDate, remark: entry };
        this.diary.push(newEntry);
        console.log("New entry added!", newDate, entry);
}

    editRemark(date, newEntry) {
        const newEvents = this.diary.map(p => p.date === date ? {
        ...p, remark: newEntry } : p);
        console.log("The remark was successfully edited!", date, newEntry);
}

    editDate(oldDateEntry, newDateEntry) {
        const newEvents = this.diary.map(p => p.date === oldDateEntry ? {
        ...p, date: newDateEntry } : p);
        console.log("The date was successfully edited!", newDateEntry);
}

    deleteEvent(date) {
        for (let i = 0; i < this.diary.length; i++) {
            const element = this.diary[i];
            if (element.date === date) {
                console.log("The event was successfully deleted!", this.diary[i]);
                this.diary.splice(i, 1);
        };
    };
};

}

let dreamDiary = new Diary ([])
console.log(dreamDiary);

dreamDiary.addNewEntry("June 10,2021", "I dreamt that a sloth was doing my nails and kept telling me that I should invest in the stock market.");
dreamDiary.addNewEntry("June 11,2021", "I dreamt about dinosaurs overtaking my city. Peter Pan and I had to hunt down and fight the reigning T-Rex to restore balance to the Earth.");
dreamDiary.addNewEntry("June 12,2021","I came back home from my school, where everyone became aliens. I saw my dad, and told him what happened. He responded, 'I'm not your dad,' and pointed at a nail sticking out from his head, which was proof of being an alien.")
dreamDiary.addNewEntry("June 13,2021", );
dreamDiary.addNewEntry("June 14,2021", )
console.log(dreamDiary);
dreamDiary.printRemarkFromOneDay("June 10, 2021");
dreamDiary.printYearDatesEntries(dreamDiary);
dreamDiary.printEventsRange("June 11,2021", "June 13,2021");
dreamDiary.getEntry()
// dreamDiary.wordSearch("you")
// dreamDiary.longestWordSearch();
dreamDiary.printEventsFromOneMonth("June");
dreamDiary.editRemark("June 11,2021", "I dreamt that ...");
dreamDiary.editDate("June 12, 2021", "June 13, 2021");
dreamDiary.deleteEvent("June 10, 2021");