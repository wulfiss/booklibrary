import { DATA, UI } from "./dataInputs";
import { Books, arrToJson, updateBookTable, clickOnBook, removeContainer } from "./operations";
import { form } from "./UI";

const functionMap = {
    btnAdd: function(e){
        const { main } = UI();
        main.appendChild(form());
    },
    btnFormSave: function(e){
        const { title, author, startDate, finishDate, status } = DATA();
        arrToJson(Books(title, author, startDate, finishDate, status));
        updateBookTable();
        clickOnBook();
    },
    btnUpdateClose: function(e){
        removeContainer('mainUpdateDiv');
    }
}

const btnGlobal = function readButtonForTheWholePage(){
    const { body, main } = UI();

    body.addEventListener('click', (e) => {
        let target = e.target;
        let data;
        if(target.nodeName === 'BUTTON'){
            functionMap[target.dataset.btn](e);
        }
    })
}

export { btnGlobal };