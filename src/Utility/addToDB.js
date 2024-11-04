import { toast } from "react-toastify";

const getStoredReadList = () =>{
    //read list
    const storedListString = localStorage.getItem('read-list');
    if(storedListString){
        const storedList = JSON.parse(storedListString);
        return storedList;
    }
    else{
        return [];
    }
}


const addToStoreReadList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
    toast('already exists in the list.');
    }
    else{
        storedList.push(id);
        const storedListString = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListString);
        toast('this book is added to your read list');
    }
}


export {addToStoreReadList}