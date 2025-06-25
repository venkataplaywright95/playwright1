
const XLSX = require('xlsx')

 let  workbook;
let sheet;
class ExcelUtilities {


    static readExcelFile(filepath) {

         workbook = XLSX.readFile(filepath);

        sheet = workbook.Sheets['Sheet1'];


        const data = XLSX.utils.sheet_to_json(sheet)

        console.log(data.length)
        console.log("read data is successfully ")

        return data

    }


    static updateExcel(filepath,data)
{
    //  workbook = XLSX.readFile(filepath);

       //  sheet = workbook.Sheets['Sheet1'];
    // const newsheet=XLSX.utils.sheet_to_json(sheet)

    // workbook.Sheets['sheet1']= newsheet;

    // XLSX.writeFile(workbook,filepath)
    // console.log("update successfully")


    // Convert JSON to worksheet
const worksheet = XLSX.utils.json_to_sheet(data);

// Create a new workbook and append the worksheet
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

// Write to file
XLSX.writeFile(workbook, filepath);




}





static modifyData(filepath,data)

{
// Step 1: Read the existing workbook
// const workbook = XLSX.readFile(filepath);

// // Step 2: Get the first worksheet

// const worksheet = workbook.Sheets['Sheet1'];

// Step 3: Convert worksheet to JSON
const Exceldata = XLSX.utils.sheet_to_json(data);

// Step 4: Modify the data (e.g., add a new row)
Exceldata.push({ Name: 'Venkat',Category: 28 });

// Step 5: Convert JSON back to worksheet
const updatedWorksheet = XLSX.utils.json_to_sheet(Exceldata);

// Step 6: Replace the worksheet in the workbook
workbook.Sheets['Sheet1'] = updatedWorksheet;

// Step 7: Write the updated workbook back to file
XLSX.writeFile(workbook, filepath);


}


}


module.exports = { ExcelUtilities }