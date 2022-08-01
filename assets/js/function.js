
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









    // let time_diff = endTime.getTime() - startTime;
    // let time_cng = endTime.getTime() - Date.now();

    // let ami = (100 * time_cng) / time_diff;
    // par.innerHTML = ami

