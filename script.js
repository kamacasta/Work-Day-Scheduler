// universal variables 
const workDayArr = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];

// display time in jumbotron using moment.js
var displayTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$(".jumbotron").append(displayTime);


// for loop not finished
for (var i = 0; i < workDayArr.length; i++) {

    // local variable containing the workDayArr (universal varaible)
    var time = workDayArr[i];
    var textArea = document.querySelectorAll(".description");
    var saveBtn = document.querySelectorAll(".saveBtn");
    
    


    // Timeblocks will change color depending on when viewed
    
    var presentHour = moment().hour()
    var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    if (presentHour === number[i]){
        textArea.css('.past')
    }
        

    // saveBtn logic

}




