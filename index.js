function validateDate() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    let inputDate = new Date(year, month - 1, day);
    let currentDate = new Date();

    if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1900 && year <= 2023 && inputDate.getDate() === day && inputDate.getMonth() === month - 1 && inputDate.getFullYear() === year) {
        let formattedDate = inputDate.toLocaleDateString({ month: "long", day: "numeric", year: "numeric" });
        document.getElementById("output").innerHTML = formattedDate;

        if (inputDate < currentDate) {
            let timeDiff = Math.abs(currentDate.getTime() - inputDate.getTime());
            let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            document.getElementById("output").innerHTML += "<br> Days difference:" + diffDays;
        }
    }
    else {
        document.getElementById("output").innerHTML = "Invalid date";
    }
}