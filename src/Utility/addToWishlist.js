const getStoredWishList = () =>{
    //read list
    const storedListString = localStorage.getItem('wish-list');
    if(storedListString){
        const storedList = JSON.parse(storedListString);
        return storedList;
    }
    else{
        return [];
    }
}


const addToStoreWishList = (id) =>{
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        console.log(id, "already exists in the list.")
    }
    else{
        storedList.push(id);
        const storedListString = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListString);
    }
}


export {addToStoreWishList}