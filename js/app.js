


 // The data/time we want to countdown to
 let countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

 // Run myFunc every second
 let setCountDown = setInterval(function() {

 let now = new Date().getTime();
 let timeLeft = countDownDate - now;
     
 // Calculating the days, hours, minutes and seconds left
 let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
 let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
     
 // Result is output to the specific element
 if(days<10){
     
     document.getElementById("days").innerHTML = `0 ${days}` ;
 }else{

     document.getElementById("days").innerHTML = days ;
 }
 if(hours<10){
     
    document.getElementById("hours").innerHTML = `0 ${hours}` ;

 }else{
    document.getElementById("hours").innerHTML = hours ;
 }
 if(minutes<10){
     
    document.getElementById("minutes").innerHTML = `0 ${minutes}` ;
}else{
 document.getElementById("mins").innerHTML = minutes ; 
}
if(seconds<10){
     
    document.getElementById("secs").innerHTML = `0 ${seconds}` ;
}else{
 document.getElementById("secs").innerHTML = seconds ;
}    
 // Display the message when countdown is over
 if (timeLeft < 0) {
     clearInterval(setCountDown);
     document.getElementById("days").innerHTML = ""
     document.getElementById("hours").innerHTML = "" 
     document.getElementById("mins").innerHTML = ""
     document.getElementById("secs").innerHTML = ""
     document.getElementById("end").innerHTML = "TIME UP!!";
 }
 }, 1000);




