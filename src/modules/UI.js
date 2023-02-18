import { UI, DATA } from "./dataInputs";

//node is the element that is going to be created so ex: node: 'div', the fallback is always to div, then 'text' is for create textNode
const createElements = function littleHelperForCreatingHtmlElements(el){

    const temp = el.node ? document.createElement(el.node) : document.createElement('div');

    for(const [key, value] of Object.entries(el)){
        if(key !== 'node'){
            if(key === 'text'){
                const text = document.createTextNode(value);
                temp.appendChild(text);
            }else{
                temp.setAttribute(`${key}`, `${value}`);
            }
        }
    }

    return temp;
}

const form = function CreateAFormForAddTheBook(){
    const fieldset = createElements({ node: 'fieldset' });
    const legend = createElements({ node: 'legend', text: 'Book' });

    const form = createElements({ node:'form' });
    const ulForm = createElements({ node:'ul' });

    const liFormOne = createElements({ node: 'li' });
    const bookName = createElements({ node: 'input', id: 'nameBook', type: 'text', placeHolder: 'Title' });
    liFormOne.appendChild(bookName);

    const liFormTwo = createElements({ node: 'li' });
    const bookAuthor = createElements({ node: 'input', id: 'authorBook', type: 'text', placeHolder: 'Author' });
    liFormTwo.appendChild(bookAuthor);

    /* when these element are onfocus they are showed as input type date, but when they lose focus they are showed as type text, so they can display the placeholder*/
    const liFromThree = createElements({ node: 'li' });
    const initialDate = createElements({ node: 'input', id: 'initialDate', type: 'text', placeHolder: 'Start Date', onfocus: '(this.type="date")', onblur: '(this.type="text")' });
    liFromThree.appendChild(initialDate);

    const liFromFour = createElements({ node: 'li' });
    const finalDate = createElements({ node: 'input', id: 'finalDate', type: 'text', placeHolder: 'Finish Date', onfocus: '(this.type="date")', onblur: '(this.type="text")' });
    liFromFour.appendChild(finalDate);

    /************************ create select element in form  ************************/
    const liFormFive = createElements({ node: 'li' });
    const statusOp = createElements({ node: 'select', id: 'statusBook', required: '' });

    // add this part in order to mimic placeholder follow in the css
    const placeHldrStatus = createElements({ node: 'option', text: 'Status', id:'Status', class: 'options', disabled: '', selected: '', value: '' });
    statusOp.appendChild(placeHldrStatus);

    const optArr = { reading: 'Reading', completed: 'Completed', onhold: 'On-Hold', dropped: 'Dropped', planTwoWatch: 'Plan to Read' };

    for (const [key, value] of Object.entries(optArr)){
        const options = createElements({ node:'option', text: value, id: key, class: 'options', value: value });
        statusOp.appendChild(options);
    }

    liFormFive.appendChild(statusOp);

    /************************ create select element in form  ************************/

    const liFormBtn = createElements({ node: 'li' });
    const btnFormSave = createElements({ node: 'button', text: 'Save', id: 'btnSave', class: 'buttons', type: 'button' });
    const btnFormCancel = createElements({ node: 'button', text: 'Cancel', id: 'btnCancel', class: 'buttons', type: 'button' });
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
    const content = createElements({ node: 'div', id:'tableContent' });
    const arrBooks = JSON.parse(localStorage.getItem('arrBooks'));

    if(arrBooks){
        for(let i = 0; i < arrBooks.length; i += 1){
            const bookItem = createElements({ node: 'div', id:'bookDiv', class: 'bookItems' });
            bookItem.dataset.book = i;

            const bookItemTitle = createElements({ node: 'div', text: arrBooks[i]['title'], id: 'bookItemTitle', class: 'bookSubItems' });
            const bookItemAuthor = createElements({ node: 'div', text: arrBooks[i]['author'], id: 'bookItemAuthor', class: 'bookSubItems' });
            const bookItemStartDate = createElements({ node: 'div', text: arrBooks[i]['startDate'], id: 'bookItemStartDate', class: 'bookSubItems' });
            const bookItemFinishDate = createElements({ node: 'div', text: arrBooks[i]['finishDate'], id: 'bookItemFinishDate', class: 'bookSubItems' });
            const bookItemStatus = createElements({ node: 'div', text: arrBooks[i]['status'], id: 'bookItemStatus', class: 'bookSubItems' });

            bookItem.appendChild(bookItemTitle);
            bookItem.appendChild(bookItemAuthor);
            bookItem.appendChild(bookItemStatus);
            bookItem.appendChild(bookItemStartDate);
            bookItem.appendChild(bookItemFinishDate);

            content.appendChild(bookItem);
        }
    }

    return content;

}

const bookTable = () => {
    const tableMain = createElements({ node:'div', id:'tableMain' });

    const header = createElements({ node:'div', id: 'tableHeader' });
    const headerTitle = createElements({ node:'div', text: 'Title', id: 'headerTitle', class: 'headerItems' });
    const headerAuthor = createElements({ node:'div', text: 'Author', id: 'headerAuthor', class: 'headerItems' });
    const headerStarDate = createElements({ node:'div', text: 'Start date', id: 'headerStarDate', class: 'headerItems' });
    const headerFinishDate = createElements({ node:'div', text: 'Finish date', id: 'headerFinishDate', class: 'headerItems' });
    const headerStatus = createElements({ node:'div', text: 'Status', id: 'headerStatus', class: 'headerItems' });

    header.appendChild(headerTitle);
    header.appendChild(headerAuthor);
    header.appendChild(headerStatus);
    header.appendChild(headerStarDate);
    header.appendChild(headerFinishDate);

    tableMain.appendChild(header);
    tableMain.appendChild(showTableContent());

    return tableMain;
}

const windowInfo = (indexBook) => {
    const { arrBooks } = DATA();
    const mainUpdateDiv = createElements({ node: 'div', id: 'mainUpdateDiv' });

    const ulUpdate = createElements({ node: 'ul' });

    const liUpdateOne = createElements({ node: 'li' });
    const titleUpdateP = createElements({ node: 'p', text: 'Title:', id:'titleUpdateP' });
    const titleUpdate = createElements({ node: 'input', id: 'titleUpdate', type: 'text', value: arrBooks[indexBook].title });

    liUpdateOne.appendChild(titleUpdateP);
    liUpdateOne.appendChild(titleUpdate);
    ulUpdate.appendChild(liUpdateOne);

    const liUpdateTwo = createElements({ node: 'li' });
    const authorUpdateP = createElements({ node: 'p', text: 'Author:', id:'authorUpdateP' });
    const authorUpdate = createElements({ node: 'input', id: 'authorUpdate', type: 'text', value: arrBooks[indexBook].author });

    liUpdateTwo.appendChild(authorUpdateP);
    liUpdateTwo.appendChild(authorUpdate);
    ulUpdate.appendChild(liUpdateTwo);

    const liUpdateThree = createElements({ node: 'li' });
    const startUpdateP = createElements({ node: 'p', text: 'Start Date:', id:'startUpdateP' });
    const startUpdate = createElements({ node: 'input', id: 'startUpdate', type: 'text', onfocus: '(this.type="date")', onblur: '(this.type="text")', value: arrBooks[indexBook].startDate });

    liUpdateThree.appendChild(startUpdateP);
    liUpdateThree.appendChild(startUpdate);
    ulUpdate.appendChild(liUpdateThree);

    const liUpdateFour = createElements({ node: 'li' });
    const finishUpdateP = createElements({ node: 'p', text: 'Finish Date:', id:'finishUpdateP' });
    const finishUpdate = createElements({ node: 'input', id: 'finishUpdate', type: 'text', onfocus: '(this.type="date")', onblur: '(this.type="text")', value: arrBooks[indexBook].finishDate });

    liUpdateFour.appendChild(finishUpdateP);
    liUpdateFour.appendChild(finishUpdate);
    ulUpdate.appendChild(liUpdateFour);

    const liUpdateFive = createElements({ node: 'li' });
    const statusUpdateP = createElements({ node: 'p', text: 'Status:', id:'statusUpdateP' });
    const statusUpdate = createElements({ node: 'select', id: 'statusUpdate', value: arrBooks[indexBook].status });

    const optArr = { reading: 'Reading', completed: 'Completed', onhold: 'On-Hold', dropped: 'Dropped', planTwoWatch: 'Plan to Read' };

    for (const [key, value] of Object.entries(optArr)){
        const options = createElements({ node:'option', text: value, id: key, class: 'options', value: value });
        statusUpdate.appendChild(options);
    }

    liUpdateFive.appendChild(statusUpdateP);
    liUpdateFive.appendChild(statusUpdate);
    ulUpdate.appendChild(liUpdateFive);

    const liUpdateSix = createElements({ node: 'li' });
    const btnUpdateSave = createElements({ node: 'button', text: 'Save and Close', id: 'btnUpdateSave', class: 'btnInfo', type: 'button' });
    const btnUpdateClose = createElements({ node: 'button', text: 'Close', id: 'btnUpdateClose', class: 'btnInfo', type: 'button' });

    liUpdateSix.appendChild(btnUpdateSave);
    liUpdateSix.appendChild(btnUpdateClose);
    ulUpdate.appendChild(liUpdateSix);

    mainUpdateDiv.appendChild(ulUpdate);

    return mainUpdateDiv
}

const btnAdd = () => {
    const btnAdd = createElements({ node: 'Button', type: 'button', id: 'btnAdd', text: 'Add', class: 'buttons' });
    return btnAdd;
}

const basicElementBody = () => {
    const { body } = UI();

    const header =  createElements({ node: 'header' });
    const main = createElements({ node: 'main' });
    const footer = createElements({ node: 'footer' });

    main.appendChild(btnAdd());
    main.appendChild(form());
    main.appendChild(bookTable());


    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);

    return body;
}

export { basicElementBody, showTableContent, windowInfo };