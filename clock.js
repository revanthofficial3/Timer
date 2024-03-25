function time()
{
    let mydate = document.querySelector("#clock");
    let date = new Date();
    let hrs = 23-date.getHours();
    let min = 60-date.getMinutes();
    let sec = 60-date.getSeconds();
    let noon = "AM";
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = 25-date.getDate();

    if(hrs>12)
    {

        noon = "PM";
    }

    mydate.innerHTML = day+"Days "+hrs+"Hours "+min+"Minutes "+sec+"Seconds ";

    

}

setInterval(time,1000)