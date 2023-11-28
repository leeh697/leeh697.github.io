//create variable for where you would like to display the date on the HTML document
let container = document.querySelector('.wrapper');
  //Establishes a variable called “dateDiv” that creates a div element on the document
let dateDiv = document.createElement("div");
let otherText = document.createElement("span");
let colors = ["#83918b", "#898989", "#ab93b9", "#c0a63e", "#a2d1e4", "#fbe3ff", "#acadd4", "#B0AC94","#f1f1f1", "#83a261", "#faffca", "#B69494", "#A55840"];


//create function called dispalyDate
function displayDate() {
  let date = new Date();
  //Appends the “dateDiv” as a child to the container of your document
  let randColor = colors[Math.floor(Math.random()*(colors.length-1))];


  //appends the "otherText" to the container
  container.appendChild(otherText);
  otherText.classList.add("other");
  otherText.innerHTML = "Right now it is ...";
  dateDiv.style.color = randColor;

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
setInterval(displayDate, 1000);