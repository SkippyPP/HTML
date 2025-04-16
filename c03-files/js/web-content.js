function calculateArea(length,width){
    let area = length * width;
    return area;
}

let roomLength = 12;
let roomWidth = 16;
let totalArea = calculateArea(roomLength,roomWidth)

// let el =document.getElementById("update");
// el.textContent = "the area of the room is " + totalArea + " square units."

function updateMessage(element, messageString){
    /*
    Purpose: update the textContent in the 'element' area of the webpage
    Parameters:
        @Element - the element of the page we will be updating
        @messageString -the content to place on the webpage
    Return: none
    */ 

    element.textContent = messageString;

}

let message = "Sign up for the newsletter to receive 10% off your next stay!"
let el = document.getElementById('message')
updateMessage(el, message)
function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    }

    this.discountedPrice = function(){
        return this.room_cost * (1-this.discount)
    }
}

let hotelQuay = new Hotel("Hotel Quay", 55, 38);
let hotelRiverPark = new Hotel("RiverPark", 100, 64);

hotelRiverPark.name = "The Grand River Park";
hotelRiverPark.gym = true;
hotelRiverPark.pool = true;
hotelRiverPark.room_cost = 89.99
hotelRiverPark.discount = .10


hotelQuay.gym = true;
hotelQuay.pool = false;

el = document.getElementById("hotelName");
updateMessage(el, hotelRiverPark.name);

el = document.getElementById("rooms");
//updateMessage(el, hotelRiverPark.checkAvailability() + " \nrooms left");
el.innerHTML = '<p>Room cost: <s><strong> ' + hotelRiverPark.room_cost + '</strong></s></p><br><p>Discounted cost: <strong> ' + hotelRiverPark.discountedPrice().toFixed(2) + '</strong></p>'

el = document.getElementById('update')


// el = document.getElementById("pool");
// el.className = "Pool: " + hotelRiverPark.pool;

// el = document.getElementById("gym");
// el.className = "Gym: " + hotelRiverPark.gym;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let date = new Date()
let elDate = document.getElementById('date')

let newDate = new Date()
newDate.setDate(date.getDate() + 5)

let output = "This offer expires on " + days[newDate.getDay()] + ", " + months[newDate.getMonth()] + " " + newDate.getDate()
elDate.innerText = output

el = document.getElementById('footer')
let year = date.getFullYear();
el.innerHTML = "<p>Copyright: &copy;"+ year + '</p>'