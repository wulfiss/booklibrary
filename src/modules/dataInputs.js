const UI = () => {
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    const tableContent = document.querySelector('#tableContent');
    const tableMain = document.querySelector('#tableMain');
    const bookItems = document.querySelector('.bookItems');
    const mainInfoDiv = document.querySelector('#mainInfoDiv');

    return {
        body, main, tableMain, tableContent, bookItems, mainInfoDiv
    }
}

const DATA = () => {
    const arrBooks = JSON.parse(localStorage.getItem('arrBooks'));
    const title = document.querySelector('#nameBook').value;
    const author = document.querySelector('#authorBook').value;
    const startDate = document.querySelector('#initialDate').value;
    const finishDate = document.querySelector('#finalDate').value;
    const status = document.querySelector('#statusBook').value;

    return{
        arrBooks, title, author, startDate, finishDate, status
    }
}

const BTN = () => {
    const btnSave = document.querySelector('#btnSave');
    const btnCancel = document.querySelector('#btnCancel');

    return{
        btnSave, btnCancel
    }
}

const DATAUPDATE = () => {
    const updateTitle = document.querySelector('#titleUpdate').value;
    const updateAuthor = document.querySelector('#authorUpdate').value;
    const updateStartDate = document.querySelector('#startUpdate').value;
    const updateFinishDate = document.querySelector('#finishUpdate').value;
    const updateStatus = document.querySelector('#statusUpdate').value;

    return{
        updateTitle, updateAuthor, updateStartDate, updateFinishDate, updateStatus
    }
}

const BTNUPDATE = () => {
    const btnInfoSave = document.querySelector('#btnUpdateSave');

    return{
        btnInfoSave
    }
}

export { UI, DATA, BTN, DATAUPDATE, BTNUPDATE };