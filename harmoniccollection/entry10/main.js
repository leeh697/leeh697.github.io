// const addParagraph = () => {
//   const newElement= document.createElement("p");
//   newElement.append("this is new text");
//   document.getElementById("newTextArea").append(newElement);
// }


document.addEventListener('DOMContentLoaded', function () {
    // Index to keep track of the current text
    let currentIndex = 0;

    // Button element
    const changeTextButton = document.getElementById('changeTextButton');

    // List element
    const textList = document.getElementById('textList');

    // Array of different texts
    const differentTexts = [
        '- Look at the grocery shopping list',
        '- decided which market/store to go',
        '- trader joes: eggs',
        '- trader joes: breads',
        '- trader joes: oranges',
        '- trader joes: starwberry jam',
        '- trader joes: pasta',
        '- trader joes: olive oil',
        '- h-mart: korean ramen',
        '- h-mart: curry',
        '- h-mart: korean snacks',
        '- h-mart: mandu',
        '- h-mart: kimchi',
        '- whole food: orange juice',
        '- whole food: water',
        '- bring it home!',
        // Add more texts as needed
    ];

    function changeText() {
        // Check if all texts have been displayed
        if (currentIndex < differentTexts.length) {
            // Create a new list item
            const listItem = document.createElement('li');
            listItem.textContent = differentTexts[currentIndex];

            // Append the list item to the list
            textList.appendChild(listItem);

            // Increment the index
            currentIndex++;

            // If all texts have been displayed, disable the button
            if (currentIndex === differentTexts.length) {
                changeTextButton.disabled = true;
            }
        }
    }

    // Attach the click event listener to the button
    changeTextButton.addEventListener('click', changeText);
});
