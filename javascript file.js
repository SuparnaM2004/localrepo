let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let secs=document.getElementById("secs");
setInterval(function(){
    let nowtime=new Date();//fate is an object in javascript gives date IST form

    hrs.innerHTML=(nowtime.getHours()<10?"0":"")+nowtime.getHours();                    //it will set the innerHTML from 00 to the nowtime(gethours)
    min.innerHTML=(nowtime.getMinutes()<10?"0":"") +nowtime.getMinutes();
    secs.innerHTML=(nowtime.getSeconds()<10?"0":"")+nowtime.getSeconds();
},1000)







