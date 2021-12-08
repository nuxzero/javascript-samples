import * as XLSX from "xlsx";
import * as fs from "fs";

const excelData = fs.readFileSync("sample.xlsx");
const workbook = XLSX.read(excelData, { type: "buffer" });
const firstSheetName = workbook.SheetNames[0];
const json = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName]);

console.log(json);
