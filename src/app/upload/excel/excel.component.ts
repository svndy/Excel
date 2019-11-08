import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {
  storeData: any;
  worksheet: any;
  fileUploaded: File;
  uploadExcel(event) {
    this.fileUploaded = event.target.files[0];
    this.readExcel();
  }

  constructor() { }

  ngOnInit() {

  }

  readExcel() {
    const readFile = new FileReader();
    readFile.onload = (e) => {
      this.storeData = readFile.result;
      const data = new Uint8Array(this.storeData);
      const workbook = XLSX.read(data, { type: 'array' });
      const name = workbook.SheetNames[0];
      this.worksheet = workbook.Sheets[name];
      console.log(this.worksheet);
    };
    readFile.readAsArrayBuffer(this.fileUploaded);
  }
}
