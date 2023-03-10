const UI = () => {
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    const tableContent = document.querySelector('#tableContent');
    const tableMain = document.querySelector('#tableMain');
    const bookItems = document.querySelector('.bookItems');
    const mainUpdateDiv = document.querySelector('#mainUpdateDiv');

    return {
        body, main, tableMain, tableContent, bookItems, mainUpdateDiv
    }
}

const Arr = () => {
    const arrBooks = JSON.parse(localStorage.getItem('arrBooks'));
    return {
        arrBooks
    };
}

const DATA = () => {

    const title = document.querySelector('#nameBook').value;
    const author = document.querySelector('#authorBook').value;
    const startDate = document.querySelector('#initialDate').value;
    const finishDate = document.querySelector('#finalDate').value;
    const status = document.querySelector('#statusBook').value;

    return{
        title, author, startDate, finishDate, status
    }
}

const BTN = () => {
    const btnSave = document.querySelector('#btnSave');
    const btnCancel = document.querySelector('#btnCancel');
    const btnAdd = document.querySelector('#btnAdd');

    return{
        btnSave, btnCancel, btnAdd
    }
}

const DataUpdate = () => {
    const updateTitle = document.querySelector('#titleUpdate').value;
    const updateAuthor = document.querySelector('#authorUpdate').value;
    const updateStartDate = document.querySelector('#startUpdate').value;
    const updateFinishDate = document.querySelector('#finishUpdate').value;
    const updateStatus = document.querySelector('#statusUpdate').value;

    return{
        updateTitle, updateAuthor, updateStartDate, updateFinishDate, updateStatus
    }
}

export { UI, DATA, BTN, DataUpdate, Arr };