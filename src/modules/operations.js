import { BTN, DATA, UI } from "./dataInputs";
import { showTableContent, windowInfo } from "./UI";

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

const updateBookTable = () => {
    const { tableMain, tableContent } = UI();
    tableContent.remove();
    tableMain.appendChild(showTableContent());
}

const btnForm = function giveFunctionsToBtnSaveAndCancelFromForm (){
    const { btnSave, btnCancel } = BTN();

    btnSave.addEventListener('click', (e) => {
        const { title, author, startDate, finishDate } = DATA();
        arrToJson(Books(title, author, startDate, finishDate));
        updateBookTable();
    })
};

const clickOnBook = function openTheAWindowForEditingInfoOfBook(){
    const { bookItems, tableMain } = UI();

    bookItems.addEventListener('dblclick', (e) => {
        tableMain.appendChild(windowInfo());
        console.log(1);
    })
}

export{ btnForm, clickOnBook };