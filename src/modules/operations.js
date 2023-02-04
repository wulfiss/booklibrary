import { BTN, DATA } from "./dataInputs";

const Books = (title, author, startDate, finishDate, state) => ({
    title, author, startDate, finishDate, state
});

const arrToJson = function checkIfTheArrExistInTheLocalStorageAndPushNewBookIfNotCreateANewOne(book){
    let arrBooks = JSON.parse(localStorage.getItem('arrBooks'));

    if(!arrBooks){arrBooks = [];}
    arrBooks.push(book);
    localStorage.clear();

    return localStorage.setItem('arrBooks', JSON.stringify(arrBooks));
}

const btnForm = function giveFunctionsToBtnSaveAndCancelFromForm (){
    const { btnSave, btnCancel } = BTN();

    btnSave.addEventListener('click', (e) => {
        const { title, author, startDate, finishDate } = DATA();
        arrToJson(Books(title, author, startDate, finishDate));
    })
};

export{ btnForm };