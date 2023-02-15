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

    return{
        arrBooks, title, author, startDate, finishDate
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
    const updateTitle = document.querySelector('#titleInfoInput').value;
    const updateAuthor = document.querySelector('#authorInfoInput').value;
    const updateStartDate = document.querySelector('#startInfoInput').value;
    const updateFinishDate = document.querySelector('#finishInfoInput').value;

    return{
        updateTitle, updateAuthor, updateStartDate, updateFinishDate
    }
}

const BTNUPDATE = () => {
    const btnInfoSave = document.querySelector('#btnInfoSave');

    return{
        btnInfoSave
    }
}

export { UI, DATA, BTN, DATAUPDATE, BTNUPDATE };