import { BTN, DATA } from "./dataInputs";

/* const Books = (title, author, startDate, finishDate, state) => ({
    title, author, startDate, finishDate, state
}); */

const Books = (title, author, startDate, finishDate, status) => {
    if(title === ''){ title = '---'}
    if(author === ''){ author = '---'}
    if(startDate === ''){ startDate = '---'}
    if(finishDate === ''){ finishDate = '---'}

    return{
        title, author, startDate, finishDate
    }
}

const arrToJson = function checkIfTheArrExistInTheLocalStorageAndPushNewBookIfNotCreateANewOne(book){
    let { arrBooks } = DATA();

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