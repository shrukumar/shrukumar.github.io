const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pingu.jpg") {
    myImage.setAttribute("src", "images/pingu-baker.png");
  } else {
    myImage.setAttribute("src", "images/pingu.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to Shru's Website, ${myName}!`;
    }
  }
  myButton.onclick = () => {
    setUserName();
  };

let myBook = document.querySelector(".book");
function bookRecommendation() {
    const myQuestion = prompt("Would you like a book recommendation?");
    let string = myQuestion.toLowerCase()
    if (!myQuestion) {
        bookRecommendation();
    } else if (string == 'yes') {
        myBook.textContent = `You should read "Divine Rivals" by Rebecca Ross`;
    
    }
  }

  myBook.onclick = () => {
    bookRecommendation();
  };
