var Thours=0, Tminutes=0, Tseconds=0;//, mseconds=0;
var Shours=0, Sminutes=0, Sseconds=0;
var timerTimeout=null;
var stopwatchTimeout=null;

clocktime();
stopwatchClear();
clearTimer();

function clocktime(){
    var today = new Date();
    document.getElementById("clockhours").innerHTML = today.getHours();
    document.getElementById("clockminutes").innerHTML = today.getMinutes();
    document.getElementById("clockseconds").innerHTML = today.getSeconds();
    var clockTimeout=setTimeout(clocktime,1000);
}

function stopwatch(){
    if (stopwatchTimeout==null){
        startStopwatch();
    }else{
        clearTimeout(stopwatchTimeout);
        stopwatchTimeout=null;
    }
}

function stopwatchClear(){
    Shours=0;
    Sminutes=0;
    Sseconds=0;
    //mseconds=0
    clearTimeout(stopwatchTimeout);
    timerTimeout=null;
    document.getElementById("stopwatchHours").innerHTML = Shours;
    document.getElementById("stopwatchMinutes").innerHTML = Sminutes;
    document.getElementById("stopwatchSeconds").innerHTML = Sseconds;
    //document.getElementById("timermseconds").innerHTML= mseconds;
}

function startStopwatch(){
    //mseconds=mseconds+1;
    Sseconds++;
    document.getElementById("stopwatchHours").innerHTML = Shours;
    document.getElementById("stopwatchMinutes").innerHTML = Sminutes;
    document.getElementById("stopwatchSeconds").innerHTML = Sseconds;
    //document.getElementById("timermseconds").innerHTML= mseconds;
    /*if(mseconds==10){
        mseconds=0;
        seconds++;
    }*/
    if (Sseconds==60){
        Sseconds = 0;
        Sminutes++;
    }if(Sminutes==60){
        Sminutes = 0;
        Shours++;
    }
    stopwatchTimeout=setTimeout(startStopwatch,1000);
}

//Timer

function timer(){
    if(timerTimeout==null){
        startTimer();
    }else{
        clearTimeout(timerTimeout);
        timerTimeout=null;
    }
}

function startTimer(){
        document.getElementById("timerHours").innerHTML = Thours;
        document.getElementById("timerMinutes").innerHTML = Tminutes;
        document.getElementById("timerSeconds").innerHTML = Tseconds;
        Tseconds--;
        if (Tseconds==-1){
            Tseconds = 60;
            Tminutes--;
        }
        if(Tminutes==-1){
            Tminutes = 60;
            Thours--;
        }
        timerTimeout=setTimeout(startTimer,1000);
        if(Thours==-1){
            Tminutes = 0;
            Tseconds = 0;
            Thours = 0;
            alert("Timer Timeout");
            clearTimeout(timerTimeout);
            timerTimeout=null;
        }
}


function setTimer(str){
     if(str=='u1'){
        Thours++;
    }else if(str=='u2'){
        Tminutes++;
    }else if(str=='u3'){
        Tseconds++;
    }else if(str=='d1'){
        Thours--;
    }else if(str=='d2'){
        Tminutes--;
    }else if(str=='d3'){
        Tseconds--;
    }
    document.getElementById("timerHours").innerHTML = Thours;
    document.getElementById("timerMinutes").innerHTML = Tminutes;
    document.getElementById("timerSeconds").innerHTML = Tseconds;
}

function clearTimer() {
    Thours=0;
    Tminutes=0;
    Tseconds=0;
    clearTimeout(timerTimeout);
    timerTimeout=null;
    document.getElementById("timerHours").innerHTML = Thours;
    document.getElementById("timerMinutes").innerHTML = Tminutes;
    document.getElementById("timerSeconds").innerHTML = Tseconds;
}