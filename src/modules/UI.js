import { UI, DATA } from "./dataInputs";

const addAttr = (el, attr) => {
    for(const [key, value] of Object.entries(attr)){
        el.setAttribute(`${key}`, `${value}`);
    }
}

const createElements = function littleHelperForCreatingHtmlElements(node, txt, attr){

    const temp = document.createElement(node);

    if(txt){
        const text = document.createTextNode(txt);
        temp.appendChild(text);
    };

    if(attr){
        addAttr(temp, attr)
    };

    return temp;

}

const form = function CreateAFormForAddTheBook(){
    const fieldset = createElements('fieldset');
    const legend = createElements('legend', 'Book');

    const form = createElements('form');
    const ulForm = createElements('ul');

    const liFormOne = createElements('li');
    const bookName = createElements('input', '', { id: 'nameBook', type: 'text', placeHolder: 'Title' });
    liFormOne.appendChild(bookName);

    const liFormTwo = createElements('li');
    const bookAuthor = createElements('input', '', { id: 'authorBook', type: 'text', placeHolder: 'Author' });
    liFormTwo.appendChild(bookAuthor);

    /* when these element are onfocus they are showed as input type date, but when they lose focus they are showed as type text, so they can display the placeholder*/
    const liFromThree = createElements('li');
    const initialDate = createElements('input', '', { id: 'initialDate', type: 'text', placeHolder: 'Start Date', onfocus: '(this.type="date")', onblur: '(this.type="text")' });
    liFromThree.appendChild(initialDate);

    const liFromFour = createElements('li');
    const finalDate = createElements('input', '', { id: 'finalDate', type: 'text', placeHolder: 'Finish Date', onfocus: '(this.type="date")', onblur: '(this.type="text")' });
    liFromFour.appendChild(finalDate);

    /************************ create select element in form  ************************/
    const liFormFive = createElements('li');
    const statusOp = createElements('select', '', { id: 'statusBook', required: '' });

    // add this part in order to mimic placeholder follow in the css
    const placeHldrStatus = createElements('option', 'Status', { id:'Status', class: 'options', disabled: '', selected: '', value: '' });
    statusOp.appendChild(placeHldrStatus);

    const optArr = { reading: 'Reading', completed: 'Completed', onhold: 'On-Hold', dropped: 'Dropped', planTwoWatch: 'Plan to Read' };

    for (const [key, value] of Object.entries(optArr)){
        const options = createElements('option', value, { id: key, class: 'options', value: value });
        statusOp.appendChild(options);
    }

    liFormFive.appendChild(statusOp);

    /************************ create select element in form  ************************/

    const liFormBtn = createElements('li');
    const btnFormSave = createElements('button', 'Save', { id: 'btnSave', class: 'buttons', type: 'button' });
    const btnFormCancel = createElements('button', 'Cancel', { id: 'btnCancel', class: 'buttons', type: 'button' });
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
    const content = createElements('div', '', { id:'tableContent' });
    const arrBooks = JSON.parse(localStorage.getItem('arrBooks'));

    if(arrBooks){
        for(let i = 0; i < arrBooks.length; i += 1){
            const bookItem = createElements('div', '', { id:'bookDiv', class: 'bookItems' });
            bookItem.dataset.book = i;

            const bookItemTitle = createElements('div', arrBooks[i]['title'], { id: 'bookItemTitle', class: 'bookSubItems' });
            const bookItemAuthor = createElements('div', arrBooks[i]['author'], { id: 'bookItemAuthor', class: 'bookSubItems' });
            const bookItemStartDate = createElements('div', arrBooks[i]['startDate'], { id: 'bookItemStartDate', class: 'bookSubItems' });
            const bookItemFinishDate = createElements('div', arrBooks[i]['finishDate'], { id: 'bookItemFinishDate', class: 'bookSubItems' });

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
    const tableMain = createElements('div', '', { id:'tableMain' });

    const header = createElements('div', '', { id: 'tableHeader' });
    const headerTitle = createElements('div', 'Title', { id: 'headerTitle', class: 'headerItems' });
    const headerAuthor = createElements('div', 'Author', { id: 'headerAuthor', class: 'headerItems' });
    const headerStarDate = createElements('div', 'Start date', { id: 'headerStarDate', class: 'headerItems' });
    const headerFinishDate = createElements('div', 'Finish date', { id: 'headerFinishDate', class: 'headerItems' });

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
    const mainInfoDiv = createElements('div', '', { id: 'mainInfoDiv' });

    const ulInfoDiv = createElements('ul');

    const liInfoOne = createElements('li');
    const titleInfo = createElements('p', 'Title:', { id:'titleInfo' });
    const titleInfoInput = createElements('input', '', { id: 'titleInfoInput', type: 'text', value: arrBooks[indexBook].title });

    liInfoOne.appendChild(titleInfo);
    liInfoOne.appendChild(titleInfoInput);
    ulInfoDiv.appendChild(liInfoOne);

    const liInfoTwo = createElements('li');
    const authorInfo = createElements('p', 'Author:', { id:'authorInfo' });
    const authorInfoInput = createElements('input', '', { id: 'authorInfoInput', type: 'text', value: arrBooks[indexBook].author });

    liInfoTwo.appendChild(authorInfo);
    liInfoTwo.appendChild(authorInfoInput);
    ulInfoDiv.appendChild(liInfoTwo);

    const liInfoThree = createElements('li');
    const startInfo = createElements('p', 'Start Date:', { id:'startInfo' });
    const startInfoInput = createElements('input', '', { id: 'startInfoInput', type: 'text', onfocus: '(this.type="date")', onblur: '(this.type="text")', value: arrBooks[indexBook].startDate });

    liInfoThree.appendChild(startInfo);
    liInfoThree.appendChild(startInfoInput);
    ulInfoDiv.appendChild(liInfoThree);

    const liInfoFour = createElements('li');
    const finishInfo = createElements('p', 'Finish Date:', { id:'finishInfo' });
    const finishInfoInput = createElements('input', '', { id: 'finishInfoInput', type: 'text', onfocus: '(this.type="date")', onblur: '(this.type="text")', value: arrBooks[indexBook].finishDate });


    liInfoFour.appendChild(finishInfo);
    liInfoFour.appendChild(finishInfoInput);
    ulInfoDiv.appendChild(liInfoFour);

    const liInfoFive = createElements('li');
    const btnInfoSave = createElements('button', 'Save and Close', { id: 'btnInfoSave', class: 'btnInfo', type: 'button' });
    const btnInfoClose = createElements('button', 'Close', { id: 'btnInfoClose', class: 'btnInfo', type: 'button' });

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