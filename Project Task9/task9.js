let raceNumber = Math.floor(Math.random()*1000);
var registered_early = true;
var runnerAge = 18;
if(registered_early === true && runnerAge > 18){
    raceNumber += 1000;
}

if(runnerAge > 18 && registered_early === true){
    console.log(raceNumber +" will race at 9:30 am.");
}else if(runnerAge > 18 && registered_early === false){
    console.log(raceNumber +" will race at 11:30 am.");
}else if(runnerAge < 18){
    console.log(raceNumber +" will race at 12:30 pm.");
}else{
    console.log(raceNumber +" please see the registration desk.");
}
