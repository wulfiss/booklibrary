import { UI, DATA } from "./dataInputs";

const createElements = function littleHelperForCreatingHtmlElements(type, id, clasS, attrType, textNode, idLbl, attrValue, attrName, placeHldr, randomAttr, randomValue){
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
    if(randomAttr){
        temp.setAttribute(randomAttr, randomValue);
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
    const bookAuthor = createElements('input', 'authorBook', '', 'text', '', '', '', '', 'Author');
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

    /************************ create select element in form  ************************/
    const liFormFive = createElements('li');
    const statusOp = createElements('select', 'statusBook', '', '', '' , '', '', '', '', 'required', '');

    // add this part in order to mimic placeholder follow in the css
    const placeHldrStatus = createElements('option', 'Status', ['options'], '', 'Status', '');
    placeHldrStatus.setAttribute('disabled','');
    placeHldrStatus.setAttribute('selected', '');
    placeHldrStatus.setAttribute('value', '');
    statusOp.appendChild(placeHldrStatus);

    const optArr = ['Reading', 'Completed', 'On-Hold', 'Dropped', 'Plan to Read'];

    for (const opt in optArr){
        const options = createElements('option', optArr[opt], ['options'], '', optArr[opt], '', optArr[opt]);
        statusOp.appendChild(options);
    }

    liFormFive.appendChild(statusOp);

    /************************ create select element in form  ************************/

    const liFormBtn = createElements('li');
    const btnFormSave = createElements('button', 'btnSave', ['buttons'], 'button', 'Save');
    const btnFormCancel = createElements('button', 'btnCancel', ['buttons'], 'button', 'Cancel');
    liFormBtn.appendChild(btnFormSave);
    liFormBtn.appendChild(btnFormCancel);

    ulForm.appendChild(liFormOne);
    ulForm.appendChild(liFormTwo);
    ulForm.appendChild(liFromThree);
    ulForm.appendChild(liFromFour);
    ulForm.appendChild(liFormFive);
    ulForm.appendChild(liFormBtn);

    form.appendChild(ulForm);


    fieldset.appendChild(legend);
    fieldset.appendChild(form);

    return fieldset;
}

const showTableContent = () => {
    const content = createElements('div', 'tableContent');
    const arrBooks = JSON.parse(localStorage.getItem('arrBooks'));

    if(arrBooks){
        for(let i = 0; i < arrBooks.length; i += 1){
            const bookItem = createElements('div', 'bookDiv', ['bookItems']);
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

    return content;

}

const bookTable = () => {
    const tableMain = createElements('div', 'tableMain');

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
    tableMain.appendChild(showTableContent());

    return tableMain;
}

const windowInfo = (indexBook) => {
    const { arrBooks } = DATA();
    const mainInfoDiv = createElements('div', 'mainInfoDiv');

    const ulInfoDiv = createElements('ul');

    const liInfoOne = createElements('li');
    const titleInfo = createElements('p', 'titleInfo','','','Title:');
    const titleInfoInput = createElements('input', 'titleInfoInput', '', 'text', '', '', arrBooks[indexBook].title);

    liInfoOne.appendChild(titleInfo);
    liInfoOne.appendChild(titleInfoInput);
    ulInfoDiv.appendChild(liInfoOne);

    const liInfoTwo = createElements('li');
    const authorInfo = createElements('p', 'authorInfo','','','Author:');
    const authorInfoInput = createElements('input', 'authorInfoInput', '','text', '', '', arrBooks[indexBook].author);

    liInfoTwo.appendChild(authorInfo);
    liInfoTwo.appendChild(authorInfoInput);
    ulInfoDiv.appendChild(liInfoTwo);

    const liInfoThree = createElements('li');
    const startInfo = createElements('p', 'startInfo','','','Start Date:');
    const startInfoInput = createElements('input', 'startInfoInput', '','text', '', '', arrBooks[indexBook].startDate);
    startInfoInput.setAttribute('onfocus', '(this.type="date")'); // show placeholder in date input
    startInfoInput.setAttribute('onblur', '(this.type="text")');// show placeholder in date input

    liInfoThree.appendChild(startInfo);
    liInfoThree.appendChild(startInfoInput);
    ulInfoDiv.appendChild(liInfoThree);

    const liInfoFour = createElements('li');
    const finishInfo = createElements('p', 'finishInfo','','','Finish Date:');
    const finishInfoInput = createElements('input', 'finishInfoInput', '','text', '', '', arrBooks[indexBook].finishDate);
    finishInfoInput.setAttribute('onfocus', '(this.type="date")'); // show placeholder in date input
    finishInfoInput.setAttribute('onblur', '(this.type="text")');// show placeholder in date input

    liInfoFour.appendChild(finishInfo);
    liInfoFour.appendChild(finishInfoInput);
    ulInfoDiv.appendChild(liInfoFour);

    const liInfoFive = createElements('li');
    const btnInfoSave = createElements('button', 'btnInfoSave', ['btnInfo'], 'button', 'Save and Close');
    const btnInfoClose = createElements('button', 'btnInfoClose', ['btnInfo'], 'button', 'Close');

    liInfoFive.appendChild(btnInfoSave);
    liInfoFive.appendChild(btnInfoClose);
    ulInfoDiv.appendChild(liInfoFive);

    mainInfoDiv.appendChild(ulInfoDiv);

    return mainInfoDiv
}

const basicElementBody = () => {
    const { body } = UI();

    const header =  createElements('header');
    const main = createElements('main');
    main.appendChild(form());
    main.appendChild(bookTable());
    const footer = createElements('footer');

    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);

    return body;
}

export { basicElementBody, showTableContent, windowInfo };