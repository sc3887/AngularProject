import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterantService } from 'src/app/services/registrant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrant-details',
  templateUrl: './registrant-details.component.html',
  styleUrls: ['./registrant-details.component.css']
})
export class RegistrantDetailsComponent {
  registrantId: string = '';
  registrant: any = null;

  constructor(private registrantService: RegisterantService, private router: ActivatedRoute){ }
  ngOnInit(){
    this.registrantId = this.router.snapshot.paramMap.get('id') || '';
        if (this.registrantId) {
          this.getRegistrantById(this.registrantId);
        }
        else {
          //תצוגת ALERT יפה עם הודעה מתאימה.
          Swal.fire({
            icon: 'error',
            title: 'שגיאה',
            text: 'מזהה שיעור לא חוקי.',
            confirmButtonText: 'אישור'
          });
          console.error('Lesson ID not found in URL');
        }  
  }
  getRegistrantById(id: string): void {
    this.registrantService.getRegistrantById(id).subscribe(
      (response: any) => {
        if (response) {
          this.registrant = response;
          console.log('Registrant fetched successfully:', this.registrant);
        } else {
          console.error('No registrant found with the given ID');
        }
      },
      (error) => {
        console.error('Error fetching registrant details:', error);
      }
    );
  }

  goBack(){
    this.registrantService.goBack();
  }
  

  

}
