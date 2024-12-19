
    let userName = prompt("Lütfen adınızı girin:");
    document.getElementById('myName').textContent = userName;
    
    function showTime(){
    var now = new Date();
    var hour = now.getHours();
    var minute  = now.getMinutes();
    var second = now.getSeconds();

    var dayIndex = now.getDay();

    var daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    
    var day = daysOfWeek[dayIndex];

    hour = (hour < 10) ? '0' + hour : hour;
    minute = (minute < 10) ? '0' + minute : minute;
    second = (second < 10) ? '0' + second : second;
 
    document.getElementById('hour').innerText= hour;
    document.getElementById('minutes').innerText = minute;
    document.getElementById('seconds').innerText = second;
    document.getElementById('day').innerText = day;
};

showTime();

setInterval(function(){showTime();},1000);