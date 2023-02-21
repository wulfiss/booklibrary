import { UI, arr } from "./dataInputs";
import { showTableContent, windowInfo } from "./UI";

const Books = (title, author, startDate, finishDate, status) => {
    return{ title, author, startDate, finishDate, status }
}

const arrToJson = function checkIfTheArrExistInTheLocalStorageAndPushNewBookIfNotCreateANewOne(book){
    let { arrBooks } = arr();

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

const removeContainer = function checkIfDivAlreadyExistAndDeletesIt(container){
    if(document.querySelector(`#${container}`)){
        document.querySelector(`#${container}`).remove();
    }
}

const clickOnBook = function openTheAWindowForEditingInfoOfBook(){
    const { tableContent, main } = UI();

    tableContent.addEventListener('dblclick', (e) => {
        removeContainer('mainUpdateDiv');
        main.appendChild(windowInfo(e.target.dataset.book));
    })
}

const updateBookArr = function updateBookArr(title, author, startDate, finishDate, status, index){
    let { arrBooks } = arr();

    arrBooks[index].title = title;
    arrBooks[index].author = author;
    arrBooks[index].startDate = startDate;
    arrBooks[index].finishDate = finishDate;
    arrBooks[index].status = status;

    if(!arrBooks){arrBooks = [];}
    localStorage.clear();
    return localStorage.setItem('arrBooks', JSON.stringify(arrBooks));
}


export{ clickOnBook, Books, arrToJson, updateBookTable, removeContainer, updateBookArr };