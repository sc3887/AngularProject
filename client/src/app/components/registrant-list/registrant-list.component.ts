import { Component, OnInit } from '@angular/core';
import { RegistrantService } from 'src/app/services/registrant.service';

@Component({
  selector: 'app-registrant-list',
  templateUrl: './registrant-list.component.html',
  styleUrls: ['./registrant-list.component.css']
})
export class RegistrantListComponent implements OnInit {
  registerants: any[] = [];
  rowData: any[] = []; // הנתונים שיוצגו בטבלה
  constructor(private registrantService: RegistrantService) { }
  ngOnInit(): void {
    //הצגת כל הנרשמות
    this.getAllRegistrants();
  }
 //הצגת פרטי כל הנרשמות בתוך טבלה ע"י שימוש ב AG-GRID
 columnDefs = [
  { headerName: 'שם מלא', field: 'fullName', sortable: true, filter: true },
  { headerName: 'טלפון', field: 'phone', sortable: true, filter: true },
  { headerName: 'תעודת זהות', field: 'idNumber', sortable: true, filter: true },
  { headerName: 'מזהה שיעור', field: 'lessonId', sortable: true, filter: true },
  { headerName: 'מחיר', field: 'price', sortable: true, filter: true },
  { headerName: 'שולם', field: 'isPaid', sortable: true, filter: true }
];



  getAllRegistrants(): void {
    this.registrantService.getAllRegistrants().subscribe(
      (response: any[]) => {
        if (response) {
          this.registerants = response;
          this.rowData = this.registerants;
          console.log('Registrants fetched successfully:', this.rowData);
          console.log('Registrants fetched successfully:', this.registerants);
        } else {
          this.rowData = []; // שמירת הנתונים ישירות ב-rowData
          console.log('No registrants found');
        }
      },
      (error) => {
        console.error('Error fetching registrants:', error);
      }
    );
  }

  defaultColDef = {
    flex: 1, // כל עמודה תתפוס מקום שווה
    minWidth: 100,
    resizable: true, // אפשרות לשנות את גודל העמודות
    sortable: true, // אפשרות למיין
    filter: true // אפשרות לסנן
  };

  ngAfterViewInit(): void {
    const ariaDescription = document.querySelector('.ag-aria-description-container');
    if (ariaDescription) {
      ariaDescription.remove();
    }
  }
  goBack(): void {
    window.history.back();
  }
}

