
const fs = require("fs");
  const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let flag= false;
let arr=[];
function askUser(){

console.log("Hello there, we have a few options for this program:");
console.log("1 for reading the csv file");
console.log("2 for writing to the csv file");
console.log("3 for printing the stored array of json objects");

rl.question('What would you like to do today ? ', function (number) {
 if(number=="1")
{

var data = fs.readFileSync("users.csv", "utf8");
 
data = data.split("\r\n"); 
let header =data[0].split(",");
for (let i=1;i<data.length;i++) { 
 let current = data[i].split(",");
 let temp = `{\"${header[0]}\":\"${current[0]}\",\"${header[1]}\":\"${current[1]}\",\"${header[2]}\":\"${current[2]}\",\"${header[3]}\":\"${current[3]}\",\"${header[4]}\":\"${current[4]}\"}`;
arr[i-1]= JSON.parse(temp);
   
}
console.log('\x1b[35m%s\x1b[0m', "File stored successfully" );

askUser();
}
if(number=="2")
{
    fs.appendFileSync("users.csv", "utf8");
    rl.question('Enter user name: ', function (name) {
        rl.question('Enter Birthday(formatted as MM/DD/YYYY): ', function (birthday) {
            rl.question('Enter Address: ', function (address) {
                rl.question('Enter mobile number:  ', function (mobile) {
                    rl.question('Enter gender as (M/F):  ', function (gender) {
                        console.log(``);
                        
                       
newUser = `\r\n${name},${birthday},${address},${mobile},${gender}`;
fs.appendFileSync("users.csv", newUser);
console.log('\x1b[35m%s\x1b[0m', "Added user successfully" );

                        askUser();
                      });
                  });
              });
        });
      });
}
if(number=="3")
{
    if(arr.length<1)
    {
        console.log('\x1b[36m%s\x1b[0m', "please read csv file first in order to store it to the array" );
      
    }
    else console.log(arr);


    askUser();
}
    
});


}

askUser();

