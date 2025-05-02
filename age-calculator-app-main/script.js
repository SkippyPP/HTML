const form = document.querySelector("#birthday")

const DAY_INVALID = "Must be a valid day"
const INVALID_DATE = "Must be a valid date"
const MONTH_INVALID = "Must be a valid month"
const YEAR_INVALID = "Must be in the past"
const EMPTY_FIELD = "This field is required"

let monthW31 = [1, 3, 5, 7, 8, 10, 12]

function showMessage(control, outputMsg, type) {
    //finds the control to update the styling
    const smallMSG = control.parentNode.querySelector('small')
    smallMSG.innerText = outputMsg


    control.className = type ? "success" : "error"

    return type
}



function showError(input, message) {
    return showMessage(input, message, false)
}

function showSuccess(input) {
    return showMessage(input, "", true)

}

function hasValue(input, message) {
    //if the input control has a null/ empty string as its value, return an error msg and style the form
    if (input.value.trim() === "") {
        return showError(input, message)
    }

    //there is text in the input control, return no message and style the form
    return showSuccess(input)
}
function validDay(inputDay,inputMonth,inputYear, invalidMsg) {
    const day = inputDay.value.trim()
    const month = inputMonth.value.trim()
    const year = inputYear.value.trim()

    if (year % 4 == 0 && month == 2 && day <= 29 || year % 4 != 0 && month == 2 && day <= 28 || month != 2 && day > 0 && day <= 30 || month == 1 && day > 0 && day <= 31 || month == 3 && day > 0 && day <= 31 || month == 5 && day > 0 && day <= 31 || month == 7 && day > 0 && day <= 31 || month == 8 && day > 0 && day <= 31 || month == 10 && day > 0 && day <= 31 || month == 12 && day > 0 && day <= 31  ) {
        return showSuccess(inputDay, "", true)
    }
    else if (inputDay.value.trim() === "") {
        return showError(inputDay, EMPTY_FIELD)
    }
    return showError(inputDay, INVALID_DATE, false)
}
function validMonth(input, invalidMsg) {
    const month = input.value.trim()

    if (month > 0 && month <= 12) {
        return showSuccess(input, "", true)
    }
    else if (input.value.trim() === "") {
        return showError(input, EMPTY_FIELD)
    }
    return showError(input, invalidMsg, false)
}
function validYear(input, invalidMsg) {
    const year = input.value.trim()
    const currentYear = new Date().getFullYear()

    if (year.length < 4 || year > currentYear) {
        return showError(input, invalidMsg, false)
    }
    else if (input.value.trim() === "") {
        return showError(input, EMPTY_FIELD)
    }
    return showSuccess(input, "", true)
}

let list = document.querySelectorAll('span')
let date = new Date()

function showOutput() {

    let day = form.elements['day'].value
    let days = Math.abs(date.getDate() - day)

    let displayDay = list[2]
    displayDay.innerHTML = '<p><strong> ' + days + '</strong></p> '


    let month = form.elements['month'].value
    let months = month < date.getMonth() + 1 ? Math.abs((date.getMonth() + 1) - month) : Math.abs(12 - Math.abs(((date.getMonth() + 1) - month)));
    let displayMonth = list[1]
    displayMonth.innerHTML = '<p><strong> ' + months + '</strong></p> '

    let year = form.elements['year'].value
    let years = date.getFullYear() - ((month > date.getMonth() + 1) ? year - -1 : year)

    let displayYear = list[0]
    displayYear.innerHTML = '<p><strong> ' + years + '</strong></p> '

}



form.addEventListener("submit", function (event) {
    event.preventDefault()

    let dayValid = validDay(form.elements['day'],form.elements['month'],form.elements['year'], DAY_INVALID)
    let monthValid = validMonth(form.elements['month'], MONTH_INVALID)
    let yearValid = validYear(form.elements['year'], YEAR_INVALID)



    if (dayValid && monthValid && yearValid) {
        showOutput()
    }



})










