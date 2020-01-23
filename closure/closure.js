//////////////////// 1 -

function nonSense(){
    var inputString = prompt("Please Say what do You want to say...");
    function blab(){
        alert(inputString);
    };
    blab();
}
nonSense();

//////////////// 2 - 

function nonSense(){
    var inputString = prompt("Please Say what do You want to say...");
    
    setTimeout( function blab(){
        alert(inputString);
    },2000);
}
nonSense();

////////////////// 3 - 4

function nonSense(){
    
    function blab(words){
        console.log(words);
    }
    return blab;
}
var blabLater = nonSense();
blabLater("I want to print this.");
var blabAgainLater = nonSense();
blabAgainLater("I am second while calling blab");

// //////////////// 5 -


var lastNameTrier = function(firstName){
    var firstNameInside = firstName;

     var innerFunction = function(lastName) {
        console.log(firstNameInside+" "+lastName);
     };
     return innerFunction;
 };
 var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
 firstNameFarmer('Brown'); //logs 'Farmer Brown'
 firstNameFarmer('Jane');
 firstNameFarmer('Lynne');

 ///////////////////////// 6 -


 function storyWriter(){
     var story = [];
     var storyData = {
        addWords : function(storyWords){
           story.push(storyWords);
           console.log(story);
        },
        erase : function(){
            story.splice(0,story.length)
        //    story.forEach((value,index) => {
        //     story[index].pop();
        //    })
           console.log(story);
        }
     }
     return storyData;
 }
 
 var farmLoveStory = storyWriter();
    farmLoveStory.addWords('There was once a lonely cow.'); 
    farmLoveStory.addWords('It saw a friendly face.');

var storyOfMyLife = storyWriter();
    storyOfMyLife.addWords('My code broke.');
    storyOfMyLife.addWords('I ate some ice cream.');

    storyOfMyLife.erase();





