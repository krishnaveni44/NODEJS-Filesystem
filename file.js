const fs = require("fs");
const express = require('express');
const app = express();

const PORT = 4000;

app.get("/", function (request,response) {
     response.send("Hello world ✨✨!!!🎄");
 });

 app.listen(PORT, () => console.log(`Server started in ${PORT}`));
// app.listen(3000);

// Read dir
fs.readdir("./backup", (err, files) => {
    if(err){
        console.log(err);
    }
    console.log("📚 ✨",files);

});

const quote = " No beauty shines brighter than that of a good heart 🙁 !!!.";
fs.writeFile("./awesome.html", quote, (err) => {
    console.log("Completed writing !!");
});



const quote2 = "Live more, worry less 😃😃";
for(let i=1; i<=10; i++){
    fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
        console.log("Completed writing !!");
    });
}
// write means every time it will over write it
// Task 2
// node file.js 25 -> 25 files to be created / text-1.html...
const quote3 ="Happy Women's day 🎉🎉🎉";
const noOfFiles = process.argv[2];

for(let i=1; i<= noOfFiles; i++){
    fs.writeFile(`./backup/text-${i}.html`, quote3, (err) => {
        console.log("Completed writing !!!👍",`text-${i}.html`);
    });
}

fs.readFile("./cool.txt", "utf8", (err, content) => {
   if(err){
       console.log("❌", err);
   }
    console.log("📚", content);
});

fs.readFile("./backup/text-1.html", "utf8", (err, content) => {
    if(err){
        console.log("❌", err);
    }
     console.log("📚", content);
 });

const niceQuote = "\n Make everyday a little less ordinary 🙂";
fs.appendFile("./nice.txt", niceQuote, (err) => {
    console.log("Updated file !!! 🙂👍");
});

// overwrite
// fs.writeFile("./nice.txt", niceQuote, (err) => {
//     console.log("Completed writing !!! 🙂👍");
// });

// Remove file
// fs.unlink("./delete-file.css",(err) => {
//     console.log("Deleted file !!! ✨");
// });
// Delete all files in backup

// Read dir
// fs.readdir("./backup", (err, files) => {
// if(err){
//     console.log(err);
// }
// console.log(files);

// files.forEach((fileName) =>
// fs.unlink("./delete-file.css", (err) => {
//     console.log("Deleted file !!! ✨");
// })
// )


// files.forEach((fileName) =>
// fs.unlink(`./backup/${fileName}`, (err) => {
//     console.log("Deleted file !!! ✨");
// })
// )

// });
const dateObject = new Date();
// current date
// adjust 0 before single digit date
const date = (`0 ${dateObject.getDate()}`).slice(-2);
 
// current month
const month = (`0 ${dateObject.getMonth() + 1}`).slice(-2);
 
// current year
const year = dateObject.getFullYear();
 
// current hours
const hours = dateObject.getHours();
 
// current minutes
const minutes = dateObject.getMinutes();
 
// current seconds
const seconds = dateObject.getSeconds();
 
// prints date in YYYY-MM-DD format
console.log(`${year}-${month}-${date}`);
 var date1 = `${year}-${month}-${date}`;

// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`);
 
// prints time in HH:MM format
console.log(`${hours}:${minutes}`);