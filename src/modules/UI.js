import { UI, DATA } from "./dataInputs";

const createElements = function littleHelperForCreatingHtmlElements(type, id, clasS, attrType, textNode, idLbl, attrValue, attrName, placeHldr){
    const temp = document.createElement(type);

    if(id){
        temp.setAttribute('id', id);
    }
    if(clasS){
        temp.classList.add(...clasS);
    }
    if(attrType){
        temp.setAttribute('type', attrType);
    }
    if(textNode){
        const txt = document.createTextNode(textNode);
        temp.appendChild(txt);
    }
    if(idLbl){
        temp.htmlFor = idLbl;
    }
    if(attrValue){
        temp.setAttribute('value', attrValue);
    }
    if(attrName){
        temp.setAttribute('name', attrName);
    }
    if(placeHldr){
        temp.setAttribute('placeholder', placeHldr);
    }

    return temp;
}

const form = function CreateAFormForAddTheBook(){
    const fieldset = createElements('fieldset');
    const legend = createElements('legend', '', '', '' ,'Book');

    const form = createElements('form');
    const ulForm = createElements('ul');

    const liFormOne = createElements('li');
    const bookName = createElements('input', 'nameBook', '', 'text', '', '', '', '', 'Title');
    liFormOne.appendChild(bookName);

    const liFormTwo = createElements('li');
    const bookAuthor = createElements('input', 'authorBook', 'text', 'Author', '', '', '', '', 'Author');
    liFormTwo.appendChild(bookAuthor);

    const liFromThree = createElements('li');
    const initialDate = createElements('input', 'initialDate', '', 'text', '', '', '', '', 'Start reading');
    initialDate.setAttribute('onfocus', '(this.type="date")'); // show placeholder in date input
    initialDate.setAttribute('onblur', '(this.type="text")');// show placeholder in date input
    liFromThree.appendChild(initialDate);

    const liFromFour = createElements('li');
    const finalDate = createElements('input', 'finalDate', '', 'text', '', '', '', '', 'Finish reading');
    finalDate.setAttribute('onfocus', '(this.type="date")'); // show placeholder in date input
    finalDate.setAttribute('onblur', '(this.type="text")');// show placeholder in date input
    liFromFour.appendChild(finalDate);

    const liFormBtn = createElements('li');
    const btnFormSave = createElements('button', 'btnSave', ['buttons'], 'button', 'Save');
    const btnFormCancel = createElements('button', 'btnCancel', ['buttons'], 'button', 'Cancel');
    liFormBtn.appendChild(btnFormSave);
    liFormBtn.appendChild(btnFormCancel);

    ulForm.appendChild(liFormOne);
    ulForm.appendChild(liFormTwo);
    ulForm.appendChild(liFromThree);
    ulForm.appendChild(liFromFour);
    ulForm.appendChild(liFormBtn);

    form.appendChild(ulForm);


    fieldset.appendChild(legend);
    fieldset.appendChild(form);

    return fieldset;
}

const bookTable = function createATableToShowTheBooks(){

    const tableMain = createElements('div', 'tableMain');

    const header = () => {
        //const tableMain = createElements('div', 'tableMain');

        const header = createElements('div', 'tableHeader');
        const headerTitle = createElements('div', 'headerTitle', ['headerItems'], '','Title');
        const headerAuthor = createElements('div', 'headerAuthor', ['headerItems'], '', 'Author');
        const headerStarDate = createElements('div', 'headerStarDate', ['headerItems'], '', 'Start date');
        const headerFinishDate = createElements('div', 'headerFinishDate', ['headerItems'], '', 'Finish date');

        header.appendChild(headerTitle);
        header.appendChild(headerAuthor);
        header.appendChild(headerStarDate);
        header.appendChild(headerFinishDate);

        tableMain.appendChild(header);

        return tableMain;
    }

    const tableContent = () => {
        //const { arrBooks } = DATA();
        const arrBooks = JSON.parse(localStorage.getItem('arrBooks'));
        const content = createElements('div', 'tableContent');

        if(arrBooks){

            for(let i = 0; i < arrBooks.length; i += 1){
                const bookItem = createElements('div', '', ['bookItems']);
                bookItem.dataset.book = i;

                const bookItemTitle = createElements('div', 'bookItemTitle', ['bookSubItems'], '', `${arrBooks[i]['title']}`);
                const bookItemAuthor = createElements('div', 'bookItemAuthor', ['bookSubItems'], '', `${arrBooks[i]['author']}`);
                const bookItemStartDate = createElements('div', 'bookItemStartDate', ['bookSubItems'], '', `${arrBooks[i]['startDate']}`);
                const bookItemFinishDate = createElements('div', 'bookItemFinishDate', ['bookSubItems'], '', `${arrBooks[i]['finishDate']}`);

                bookItem.appendChild(bookItemTitle);
                bookItem.appendChild(bookItemAuthor);
                bookItem.appendChild(bookItemStartDate);
                bookItem.appendChild(bookItemFinishDate);

                content.appendChild(bookItem);
            }
        }

        tableMain.appendChild(content);

        return tableMain;
    }

    return {
        header, tableContent
    }
}

const basicElementBody = () => {
    const { body } = UI();

    const header =  createElements('header');
    const main = createElements('main');
    main.appendChild(form());
    main.appendChild(bookTable().header());
    main.appendChild(bookTable().tableContent());
    const footer = createElements('footer');

    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);

    return body;
}

export { basicElementBody };