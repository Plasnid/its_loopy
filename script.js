/**
 * * Looping is a key tool in automating the web!  Lets have a
 * * little walk through of a few looping techniques for arrays 
 * * and objects
 */

// * Our Array for looping
/**
 * *  Lets loop through a list of ridiculous job titles to start.
 * *  Check out our list of job titles below
 */

let weirdJobTitles = [
    {jobTitle: "Lifeguard at the Swimming Pool at the Olympics", desc:"Seriously!  Why?"},
    {jobTitle: "Professional Paint Drying Watcher", desc:"Get on the second coat faster!"},
    {jobTitle: "Self-Storage Manager", desc:"Perhaps they just run the security system?"},
    {jobTitle: "Professional Snuggler", desc:"Lonely folks need snuggles too!"},
    {jobTitle: "Professional Sleeper", desc:"Zzzzzzzzzz and mattress testing."},
    {jobTitle: "Sign Spinners", desc:"Walking around with a sign"},
    {jobTitle: "CD Rack Manufacturer", desc:"CD's still exist????"},
    {jobTitle: "Pet Psychologist", desc:"Keeping fluffys mental health healthy!"},
    {jobTitle: "Pet Food Taster", desc:"Someone lost a bet."},
    {jobTitle: "Professional Pusher", desc:"Getting folks on trains in Japan."},
    {jobTitle: "Vomit Cleaner", desc:"I really hope they don't have a sense of smell."},
    {jobTitle: "Water Slide Tester", desc:"Just making sure it's safe ;)"},
    {jobTitle: "Car Plate Blocker", desc:"In case you have the wrong digits on your car in Iran."},
    {jobTitle: "Ostrich Babysitter", desc:"Ensure those baby ostriches don't peck each other!"},
    {jobTitle: "Wrinkle Chaser", desc:"Getting rid of wrinkles in fabics before the finished product leaves the factory!"},
    {jobTitle: "Bike Fisher", desc:"Removing bikes from rivers in Amsterdam!"},
    {jobTitle: "Professional Line Stander", desc:"Keeping your place!"}
];

// ! The forwards loop!
/**
 * * This loop is broken down into 3 parts, our starting number, our ending number, and how much/increment
 * * we loop by.  While we do this, we will practice grabbing data from objects
 * *
 * * let start by console logging all of our job titles!
 */
console.log("going forwards through the loop");
for(let i=0;i<weirdJobTitles.length;i++){
    console.log(weirdJobTitles[i].jobTitle);
}
/**
 * * We can see that we start at the 0 job entry and end on the last one. 
 * * We started with Olympic lifeguard and ended with Professional Line Stander
 */

/**
 * ! The backwards loop
 * * Going back through a loop!  
 * * Now lets go through the list backwards!
 * * To make this different from our previous attempt, lets also show
 * * the job description
 * 
 * * notice that we start 1 element before the end of the list!
 * * we iterate until we reach 0, and subtract 1 from i after each entry
 * * now we start with line stander and end with lifeguard
 */
console.log("\n\n\nLets go backwards!");
for(let i=weirdJobTitles.length-1;i>=0;i--){
    console.log(`jobTitle: ${weirdJobTitles[i].jobTitle} description: ${weirdJobTitles[i].desc}`);
}

/**
 * ! for of loops
 * * This is a short form for looping where we don't have to specify start and 
 * * end numbers
 * * This time lets just console log the descriptions
 */
console.log("\n\n\njust the job descriptions now!")
for(entry of weirdJobTitles){
    console.log(entry.desc);
}



/**
 * ! Nested for Loops!
 * * Sometimes we use a 2d array to represent data
 * * Like what?  How about tic tac toe, or a chessboard, or tetris!
 * * Lets make a tic tac toe 3x3 array, which is a 2 dimensional array
 * 
 * * Who is winning here?
 */

let ticTacToe = [
    ["O", "X","X"],
    [null,"O","X"],
    [null, null, "O"]
]

// * if we console log this board our for loop will look like this:
console.log("\n\n\nWho is going to win at tic tac toe");
for(let y=0;y<=2;y++){
    for(let x=0;x<=2;x++){
        console.log(`y:${y} x:${x} value:${ticTacToe[y][x]}`);
    }
}
// * we can see from our data that O won...lets console log this
// * starting with the upper left corner(x is horizontal, y is vertical)
// * We are writing the equivalent of ticTacToe[y][x]
let topLeftSquare = ticTacToe[0][0];
let middleSquare = ticTacToe[1][1];
let bottomRigtSquare = ticTacToe[2][2];

// * lets add a little logic to see if we won!
if(topLeftSquare == middleSquare && topLeftSquare==bottomRigtSquare){
    console.log(`${topLeftSquare} wins!`);
    console.log(`${topLeftSquare} ${middleSquare} ${bottomRigtSquare}`);
}
//* Now that we have covered looping through arrays, what about objects?

// ! Iterating through Objects
/**
 * * To iterate through objects we can use for in.  
 * * Lets look through an object describing
 */
let bilby = {
    otherNames: ["greater bilby", "dalgyte", "greater rabbit-eared bandicoot"],
    nativeTo: "Australia",
    currentlyLimitedTo: ["Great Sandy", "Tanami", "Gibson deserts", "southwestern Queensland"],
    family: "Peramelidae",
    sexuallyDimorphic: true,
    aproximateWeightinKg: 2.5,
    description: "The bilby is known for its long snout, blue-gray fur, white underbelly, and long, hairless ears that resemble those of rabbits. On its tail is a prominent band of black fur that terminates with a white tuft that surrounds a naked, spurlike tip.",
    maximumLengthInCM: 55,
    GraspingApendages: "The ends of the forelimbs terminate in five digits with the middle three digits possessing a claw.",
    locomotion: "loping",
    sourceReference: "https://www.britannica.com/animal/bilby",
    hasPouch: true,
    pouchFacing: "reverse",
    diet: "omnivore",
    nativePedators: ["wedge-tailed eagles (Aquila audax)", "carpet pythons (Morelia spilota)", "monitor lizards (family Varanidae)"],
    invasivePredators:["red foxes", "feral cats", "dingoes"],
    livesIn: "burrows",
    solitary: true,
    littersPerYear: 4,
    gestationPeriod: "12 to 14 days",
    pouchPeriod: "75-80 days",
    lifeSpan: "6 to 11 years",
    convervationStatus: "vulnerable"
}

// * wow thats a lot of information!, lets loop through it!

console.log("\n\n\nAll about the bilby!")
for (let key in bilby){
    if(bilby.hasOwnProperty(key)){
        console.log(`${key} : ${bilby[key]}`)
    }
}

// * or you could looping from this page here!
// * https://reactgo.com/javascript-loop-through-object/

