const UI = () => {
    const body = document.querySelector('body');
    const tableContent = document.querySelector('#tableContent');
    const tableMain = document.querySelector('#tableMain');

    return {
        body, tableMain, tableContent
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
export { UI, DATA, BTN };