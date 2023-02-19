import { BTN, DATA, UI, DATAUPDATE, BTNUPDATE } from "./dataInputs";
import { showTableContent, windowInfo, form } from "./UI";

const Books = (title, author, startDate, finishDate, status) => {
    return{ title, author, startDate, finishDate, status }
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
        const { title, author, startDate, finishDate, status } = DATA();
        arrToJson(Books(title, author, startDate, finishDate, status));
        updateBookTable();
        clickOnBook();
    })
};

const removeMainDiv = function checkIfMainAlreadyExistAndDeletesIt(){
    const { mainUpdateDiv } = UI();
    if(mainUpdateDiv){
        mainUpdateDiv.remove();
    }
}

const clickOnBook = function openTheAWindowForEditingInfoOfBook(){
    const { tableContent, main } = UI();

    tableContent.addEventListener('dblclick', (e) => {
        removeMainDiv();
        main.appendChild(windowInfo(e.target.dataset.book));
        updateBookInfo(e.target.dataset.book);
    })
}

const updateBookInfo = function editBookInfoWhenEdit(indexBook){
    const { mainUpdateDiv } = UI();

    const updateBookArr = function updateBookArr(title, author, startDate, finishDate, status, index){
        let { arrBooks } = DATA();

        arrBooks[index].title = title;
        arrBooks[index].author = author;
        arrBooks[index].startDate = startDate;
        arrBooks[index].finishDate = finishDate;
        arrBooks[index].status = status;

        if(!arrBooks){arrBooks = [];}
        localStorage.clear();
        return localStorage.setItem('arrBooks', JSON.stringify(arrBooks));

    }

    mainUpdateDiv.addEventListener('click', (e) => {
        let target = e.target;

        if(target.nodeName === 'BUTTON'){
            if(target.id === 'btnUpdateSave'){
                const { updateTitle, updateAuthor, updateStartDate, updateFinishDate, updateStatus } = DATAUPDATE();
                updateBookArr(updateTitle, updateAuthor, updateStartDate, updateFinishDate,updateStatus, indexBook);
                updateBookTable();
                removeMainDiv();
            }else if(target.id === 'btnUpdateClose'){
                removeMainDiv();
            }
        }

        clickOnBook();
    })

}

const btnAdd = function openFormForAddingANewBook(){
    const { btnAdd } = BTN();
    const { main } = UI();

    btnAdd.addEventListener('click', (e) => {
        main.appendChild(form());
    })
}

export{ btnForm, clickOnBook, btnAdd };