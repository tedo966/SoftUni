function reading(bookPages, pagesPerHour, meta) {
    let time = bookPages / pagesPerHour;
    let requiredHoursPerDay = time / meta;
    console.log(requiredHoursPerDay)

}
reading(212,
    20 ,
    2 
    )