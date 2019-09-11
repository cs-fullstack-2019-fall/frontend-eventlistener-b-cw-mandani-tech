elementButton1 = document.querySelector("#button1");
elementButton2 = document.querySelector("#button2");
elementTitle = document.querySelector("title");
elementHeader = document.querySelector("header");

//If you click the #1 button the title should change to "1" and the background to purple.

elementButton1.addEventListener('click', changeTitle);

function changeTitle() {
    elementTitle.innerText = '1';
    elementHeader.style.background = 'purple';
}

//If you click the #2 button the title should change to "2" and the background to red.

elementButton2.addEventListener('click', changeTitle2);
function changeTitle2() {
    elementTitle.innerText = '2';

    //Use classlist to change the background.
    elementHeader.classList.toggle("yellowBackground")
    //elementHeader.style.background='red';
}