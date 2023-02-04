const UI = () => {
    const body = document.querySelector('body');

    return {
        body
    }
}

const DATA = () => {
    const title = document.querySelector('#nameBook').value;
    const author = document.querySelector('#authorBook').value;
    const startDate = document.querySelector('#initialDate').value;
    const finishDate = document.querySelector('#finalDate').value;

    return{
        title, author, startDate, finishDate
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