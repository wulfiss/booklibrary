import { DATA, UI, DataUpdate } from "./dataInputs";
import { Books, arrToJson, updateBookTable, addBtnFunction, removeContainer, updateBookArr, deleteBooks, windowInfo } from "./operations";
import { form } from "./UI";

const functionMap = {
    btnAdd: function(e){
        /*         if(!document.getElementById('addBookForm')){
            const { main } = UI();
            main.appendChild(form());
            e.target.textContent = 'Cancel';
        }else{
            document.getElementById('addBookForm').remove();
            e.target.textContent = 'Add';
        } */
        addBtnFunction(e.target);
    },
    btnFormSave: function(e){
        const { title, author, startDate, finishDate, status } = DATA();
        arrToJson(Books(title, author, startDate, finishDate, status));
        updateBookTable();
        removeContainer('addBookForm');
    },
    btnFormCancel: function (e){
        removeContainer('addBookForm');
    },
    btnUpdateSave: function(e){
        const { mainUpdateDiv } = UI();
        const { updateTitle, updateAuthor, updateStartDate, updateFinishDate, updateStatus } = DataUpdate();
        updateBookArr(updateTitle, updateAuthor, updateStartDate, updateFinishDate,updateStatus, mainUpdateDiv.dataset.key);
        updateBookTable();
        removeContainer('mainUpdateDiv');
    },
    btnUpdateClose: function(e){
        removeContainer('mainUpdateDiv');
    },
    btnDelete: function(e){
        deleteBooks(e.target.dataset.book);
        updateBookTable();
    },
    btnEdit: function(e){
        const { main } = UI();
        removeContainer('mainUpdateDiv');
        main.appendChild(windowInfo(e.target.dataset.book));
    }
}

const btnGlobal = function readButtonForTheWholePage(){
    const { body } = UI();

    body.addEventListener('click', (e) => {
        let target = e.target;
        let data;
        if(target.nodeName === 'BUTTON'){
            functionMap[target.dataset.btn](e);
        }
    })
}

export { btnGlobal };