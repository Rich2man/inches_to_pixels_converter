// CONVERTING PX TO INCHES

function converte() {
    styleRemove();

    let userInput = document.querySelector('.js-input').value;
    let heading = document.querySelector('.js-heading').innerHTML = 'PIXELS';
    let resultElement = document.querySelector('.js-result').innerHTML = userInput * 96;
    console.log(resultElement);
    let subIntro = document.querySelector('.js-sub-cal').innerHTML = 'We all so Convert Inches To pixels Manually using Formula 1 in = 96 px';


    if (userInput === '') {
        alert(` Please Enter Pixels`);
        let resultElement = document.querySelector('.js-result').innerHTML = '';
        let heading = document.querySelector('.js-heading').innerHTML = '';
        let subIntro = document.querySelector('.js-sub-cal').innerHTML = '';
        let containerElement = document.querySelector('.js-container');
        containerElement.classList.remove('reduce');


    } else if (userInput < 1) {
        alert(`Please Do You want convert ${userInput}? Sorry, check Your Inches ${userInput}.`)

        let resultElement = document.querySelector('.js-result').innerHTML = '';
        let heading = document.querySelector('.js-heading').innerHTML = '';
        let subIntro = document.querySelector('.js-sub-cal').innerHTML = '';
        let containerElement = document.querySelector('.js-container');
        containerElement.classList.remove('reduce');
    }

}



// CONVERTING PX TO CM

function converteCm() {
    styleRemoveCm();

    let userInputCm = document.querySelector('.js-inputCm').value;
    let headingCm = document.querySelector('.js-headingCm').innerHTML = 'PIXELS';
    let resultElementCm = document.querySelector('.js-resultCm').innerHTML = (userInputCm * 96) / 2.54;
    console.log(resultElementCm);
    let subIntroCm = document.querySelector('.js-sub-calCm').innerHTML = 'We all so Convert Centimeter To pixels Manually using Formula 1 px = 96, 1cm*96 /2.5';


    if (userInputCm === '') {
        alert(` Please Enter Centimeter`);
        let resultElementCm = document.querySelector('.js-resultCm').innerHTML = '';
        let headingCm = document.querySelector('.js-headingCm').innerHTML = '';
        let subIntroCm = document.querySelector('.js-sub-calCm').innerHTML = '';
        let containerElementCm = document.querySelector('.js-containerCm');
        containerElementCm.classList.remove('reduce');


    } else if (userInputCm < 1) {
        alert(`Please Do You want convert ${userInputCm}? Sorry, check Your Inches ${userInputCm}.`)


        let resultElementCm = document.querySelector('.js-resultCm').innerHTML = '';
        let headingCm = document.querySelector('.js-headingCm').innerHTML = '';
        let subIntroCm = document.querySelector('.js-sub-calCm').innerHTML = '';
        let containerElementCm = document.querySelector('.js-containerCm');
        containerElementCm.classList.remove('reduce');

    }

}



// remove padding style PX TO CM

let containerElementCm = document.querySelector('.js-containerCm');

function styleRemoveCm() {
    if (!containerElementCm.classList.contains('reduce')) {
        containerElementCm.classList.add('reduce');
    } else {
        containerElementCm.classList.add('reduce');
    }

}




// remove padding style px To in
let containerElementPx = document.querySelector('.js-container');

function styleRemove() {
    if (!containerElementPx.classList.contains('reduce')) {
        containerElementPx.classList.add('reduce');
    } else {
        containerElementPx.classList.add('reduce');
    }

}





//  local storage examle
function myEg() {
    let eg = {
        name: "tije",
        fullName: "tije"
    };

    console.log(eg);
}

localstorage.setItem("eg", eg);
// console.log(localstorage);
