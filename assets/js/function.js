
/**
 * 
 * @param {*} msg 
 * @param {*} type 
 * @returns 
 */
const setAlert = ( msg = 'All filds are riqurd !', type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`
}



const counterper = (start_time , end_time) => {

    let time_diff = end_time - start_time ;
    let time_cng  = end_time - Date.now();

    let test = (100 * time_cng) / time_diff ;

    
    return test
    
   
}

