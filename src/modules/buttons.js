import { DATA, UI } from "./dataInputs";
import { Books, arrToJson, updateBookTable, clickOnBook } from "./operations";
import { form } from "./UI";

const btnGlobal = function readButtonForTheWholePage(){
    const { body, main } = UI();

    body.addEventListener('click', (e) => {
        let target = e.target;
        let data;

        if(target.nodeName === 'BUTTON'){
            if(target.id === 'btnAdd'){
                main.appendChild(form());
            }

            if(target.id === 'btnSave'){
                const { title, author, startDate, finishDate, status } = DATA();
                arrToJson(Books(title, author, startDate, finishDate, status));
                updateBookTable();
                clickOnBook();
            }
        }
    })
}

export { btnGlobal };