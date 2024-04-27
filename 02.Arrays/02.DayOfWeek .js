function daysCount(day) {
    let daysOfWeek = ["Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"]
    let checkIfValid = day <= 7 && day > 0 ? "Valid": "Invalid day!";
    if(checkIfValid == "Valid") {
        console.log(daysOfWeek[day - 1]); 
    } else {
        console.log(checkIfValid);
        
    }
}
daysCount(7)