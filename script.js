/**
 * This file will get loaded by index.html
 */

// confirm the script loads
console.log("Hello World!");

// when the button with the id "btn_click" is clicked execute the function "handeClick"
document.getElementById("btn_click").addEventListener("click", handleClick);

let clicks = 0;

// function when button is clicked
function handleClick() {
    // click is incremented
    clicks++;
    // we say that the button was clicked
    console.log("The button was clicked");
    bobEffect("bob-up");
    // change the text content of "click counter" to clicks
    document.getElementById("click_counter").textContent = clicks;
}

// basically the opposite of the handeClick function
function handleDecrease() {
    // clicks decreased
    clicks--;
    // say that it was clicked
    console.log("Decrease button clicked");
    bobEffect("bob-down");
    // change the value of the click counter to the new value of clicks
    document.getElementById("click_counter").textContent = clicks;
}

// 
function handleReset() {
    clicks = 0;
    console.log("Reset button clicked");
    document.getElementById("click_counter").textContent = clicks;
}


document.getElementById("btn_decrease").addEventListener("click", handleDecrease);
document.getElementById("btn_reset").addEventListener("click", handleReset);


// very cool css thing
function bobEffect(effect) {
    // set clickcounter to clickcounter, to be able to change it using the constant
    const clickCounter = document.getElementById("click_counter");
    // the function takes in the effect parameter, which is either bob-up or bob-down
    clickCounter.classList.add(effect);
    // the effect lasts 200ms
    setTimeout(() => {
        // then it is removed
        clickCounter.classList.remove(effect);
    }, 200); 
}