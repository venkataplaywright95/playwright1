const XLSX=require('xlsx')


//const filepath="C://Users//VENKATA REDDY POLAKA//OneDrive//Desktop//Playwright//Exceldata//data.xlsx"


const filepath="./tests/testdata/Exceldata/data.xlsx"

const workbook=XLSX.readFile(filepath);

const sheet= workbook.Sheets['Sheet1'];


const data= XLSX.utils.sheet_to_json(sheet)


console.log(data)

console.log(data.length)


for(let i=0;i<data.length;i++)
{

    console.log(`test cases ${i+1} data `)

    console.log("test name:"+ data[i].name)

    console.log("item values:"+ data[i].item)
}