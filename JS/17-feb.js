const fs =require("fs").promises
async function readData() {
    const data = await fs.readFile('data.txt',{encoding:'utf-8'});
    console.log(data);
}
readData();