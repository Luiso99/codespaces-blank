
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}

function Employee(title) {
    //Create a function Employee that takes a single parameter and assigns it to a member variable 'title'.
    this.title = title;
    //setTitle - This function takes a single parameter and assigns it to the title member variable.
    this.setTitle = function(title) {
        this.title = title;
    }
    //getTitle - This function returns the member variable title.
    this.getTitle = function() {
        return this.title;
    }
}
function Engineer(title, isManager) {
    //Create a function Engineer that takes two parameters and assigns them to member variables 'title' and 'isManager'.
    this.title = title;
    this.isManager = isManager;
    //setIsManager - This function take a single parameter and assigns it to the isManager member variable.
    this.setIsManager = function(isManager) {
        this.isManager = isManager;
    }
    //getIsManager - This function returns the member variable isManager.
    this.getIsManager = function() {
        return this.isManager;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    var inputs = readLine().split(' ');
    var engineerObject = new Engineer(inputs[0], inputs[1].toLowerCase() === 'true');

    ws.write(`Initial Employee Profile - Title is ${engineerObject.getTitle()}. ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager\n`)

    engineerObject.setTitle(readLine());
    engineerObject.setIsManager(readLine().toLowerCase() === 'true');


    ws.write(`Final Employee Profile - Title is ${engineerObject.getTitle()}. ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager\n`)

    ws.write(`Engineer.prototype has property setTitle: ${Engineer.prototype.hasOwnProperty('setTitle')}\n`);
    ws.write(`Engineer.prototype has property getTitle: ${Engineer.prototype.hasOwnProperty('getTitle')}\n`);
    ws.write(`Engineer.prototype has property setIsManager: ${Engineer.prototype.hasOwnProperty('setIsManager')}\n`);
    ws.write(`Engineer.prototype has property getIsManager: ${Engineer.prototype.hasOwnProperty('getIsManager')}\n`);
}

