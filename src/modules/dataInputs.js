const UI = () => {
    const body = document.querySelector('body');

    return {
        body
    }
}

const DATA = () => {
    const nameBook = document.querySelector('#nameBook').value;
    const authorBook = document.querySelector('#authorBook').value;
    const staringDate = document.querySelector('#initialDate').value;
    const finishingDate = document.querySelector('#finalDate').value;

    return{
        nameBook, authorBook, staringDate, finishingDate
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