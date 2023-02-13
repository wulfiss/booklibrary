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
    const { tableContent, main } = UI();

    const removeMainDiv = function checkIfMainAlreadyExistAndDeletesIt(){
        const { mainInfoDiv } = UI();
        if(mainInfoDiv){
            console.log(mainInfoDiv);
            mainInfoDiv.remove();
        }
    }

    tableContent.addEventListener('dblclick', (e) => {
        removeMainDiv();
        main.appendChild(windowInfo(e.target.dataset.book));
        console.log(e.target.dataset.book)
    })
}

export{ btnForm, clickOnBook };