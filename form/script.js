// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formsend);

//     async function formsend(e) {
//         e.preventDefault();

//         let error = formValidate(form);
//     }

//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelector('._req');

//         for (let index = 0; index < formReq.clientHeight; index++) {
//             const input = formReq[index];
//             formRemoveError(input);

//             if(input.classList.contains('_name')) {

//             }


//         }

//     }
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
// });
const inputItems = document.querySelectorAll('.form__input');
const formBtn = document.querySelector('.form__button');


function setDate() {
    let today = new Date;
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day;
    if (today.getDay() < 10) {
        day = `0${today.getDate() + 1}`;
    } else {
        day = today.getDate() + 1;
    }
    let currentDate = `${year}-${month}-${day}`;
    console.log(currentDate)
    document.querySelector('.date').setAttribute("min", currentDate);
    document.querySelector('.date').setAttribute("value", currentDate);
}
setDate();

for (let index = 0; index < inputItems.length; index++) {
    inputItems[index].addEventListener('keyup', checkInput);
}

function checkInput() {
    let html = '<span style="color:red;">The field is invalid</span>';
    if (!this.checkValidity()) {
        this.classList.add('_error');
        this.parentNode.classList.add('_error-item');
    } else {
        this.classList.remove('_error');
        this.parentNode.classList.remove('_error-item');
    }
    checkValidation();
};

function checkValidation() {
    let error = 0
    for (let index = 0; index < inputItems.length; index++) {
        if (!inputItems[index].checkValidity()) {
            error++;
        }
    };
    if (error == 0) {
        formBtn.disabled = false;
    } else {
        formBtn.disabled = true
    }
};
checkValidation();


