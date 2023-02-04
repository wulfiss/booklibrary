import { UI } from "./dataInputs";

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
    const btnFormSave = createElements('button', '', ['buttons'], 'button', 'Save');
    const btnFormCancel = createElements('button', '', ['buttons'], 'button', 'Cancel');
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

const basicElementBody = () => {
    const { body } = UI();

    const header =  createElements('header');
    const main = createElements('main');
    main.appendChild(form());
    const footer = createElements('footer');

    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);

    return body;
}

export { basicElementBody };