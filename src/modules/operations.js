import { UI, Arr } from "./dataInputs";
import { showTableContent, windowInfo } from "./UI";

const Books = (title, author, startDate, finishDate, status) => {
    return{ title, author, startDate, finishDate, status }
}

const arrToJson = function checkIfTheArrExistInTheLocalStorageAndPushNewBookIfNotCreateANewOne(book){
    let { arrBooks } = Arr();

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

const updateBookArr = function updateBookArr(title, author, startDate, finishDate, status, index){
    let { arrBooks } = Arr();

    arrBooks[index].title = title;
    arrBooks[index].author = author;
    arrBooks[index].startDate = startDate;
    arrBooks[index].finishDate = finishDate;
    arrBooks[index].status = status;

    if(!arrBooks){arrBooks = [];}
    localStorage.clear();
    return localStorage.setItem('arrBooks', JSON.stringify(arrBooks));
}

const deleteBooks = function deleteBooksFormArray(index){
    let { arrBooks } = Arr();
    arrBooks.splice(index, 1);
    return localStorage.setItem('arrBooks', JSON.stringify(arrBooks));
}

export{ Books, arrToJson, updateBookTable, removeContainer, updateBookArr, deleteBooks, windowInfo };