import { DATA, UI, DataUpdate } from "./dataInputs";
import { Books, arrToJson, updateBookTable, clickOnBook, removeContainer, updateBookArr } from "./operations";
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
    btnFormCancel: function (e){
        removeContainer('addBookForm');
    },
    btnUpdateSave: function(e){
        const { mainUpdateDiv } = UI();
        const { updateTitle, updateAuthor, updateStartDate, updateFinishDate, updateStatus } = DataUpdate();
        updateBookArr(updateTitle, updateAuthor, updateStartDate, updateFinishDate,updateStatus, mainUpdateDiv.dataset.key);
        updateBookTable();
        clickOnBook();
        removeContainer('mainUpdateDiv');
    },
    btnUpdateClose: function(e){
        removeContainer('mainUpdateDiv');
    },
    btnDelete: function(e){
        console.log(1);
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