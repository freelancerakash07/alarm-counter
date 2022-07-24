const faiver_form = document.getElementById('faiver_form');
const alarm = document.getElementById('alarm');
const sotop_alarm = document.getElementById('sotop_alarm');
const msg = document.querySelector('.msg');
const par = document.querySelector('.par');
const count = document.querySelector('.count');



let counter = null;



faiver_form.onsubmit = (e) => {
    e.preventDefault();

    clearInterval(counter);

    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    const {
        date,
        time
    } = Object.fromEntries(form_data.entries());




    if (!date || !time) {

        msg.innerHTML = setAlert();

    } else {



        counter = setInterval(() => {

            let startTime = Date.now();
            let endTime = new Date(date + ' ' + time);
            let orderTime = Math.floor(Math.abs(endTime.getTime() - startTime));


            console.log(endTime.getTime() - startTime);


            let total_sec = Math.floor(orderTime / 1000);
            let total_min = Math.floor(total_sec / 60);
            let total_hour = Math.floor(total_min / 60);
            let total_day = Math.floor(total_hour / 24);



            let hour = total_hour - (total_day * 24);
            let min = total_min - (total_day * 24 * 60) - (hour * 60);
            let sec = total_sec - (total_day * 24 * 60 * 60) - (hour * 60 * 60) - (min * 60);


            if (total_sec <= 0) {

                clearInterval(counter);
                alarm.play();



            }

            count.innerHTML = `<h2>day : ${total_day} hour : ${hour} minute : ${min} sec : ${sec}</h2>`

            let time_diff = endTime.getTime() - startTime;
            let time_cng = endTime.getTime() - Date.now();

            let ami = (100 * time_cng) / time_diff;
            par.innerHTML = ami



        }, 1000)





    }


}




sotop_alarm.onclick = (e) => {

    e.preventDefault();

    alarm.paused()
}