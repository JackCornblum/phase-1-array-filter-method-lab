// Code your solution here


function findMatching(drivers, name){
    const newDrivers = drivers.filter(function(person){return person.toLowerCase() === name.toLowerCase()});
    return newDrivers;
}

function fuzzyMatch(drivers, name){
    //returns if the first letter of the name matches for both
    const newDrivers = drivers.filter(function(person){return person[0] === name[0]});
    return newDrivers;
}

function matchName(driver, driverName) {
    const newDrivers = driver.filter(function(person){return person.name === driverName});
    
    return newDrivers;
}