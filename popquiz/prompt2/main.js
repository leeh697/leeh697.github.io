//create variable for where you would like to display the date on the HTML document
let container = document.querySelector('.wrapper');
  //Establishes a variable called “dateDiv” that creates a div element on the document
let dateDiv = document.createElement("div");


//create function called dispalyDate
function displayDate() {
  let date = new Date();
  //Appends the “dateDiv” as a child to the container of your document
  container.appendChild(dateDiv);
  //Adds a class to your dateDiv
  dateDiv.classList.add('date');
  //Sets the “innerHTML” of “dateDiv” to be the variable for your date
  dateDiv.innerHTML = date;
}


function clearPage(){
  dateDiv.innerHTML = " ";
}

//Call up the function
displayDate();

let button=document.querySelector(".button");

button.addEventListener("click",clearPage);
button.addEventListener("click",displayDate);
