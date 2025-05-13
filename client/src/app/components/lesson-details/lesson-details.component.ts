import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from 'src/app/services/lessons.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.css']
})
export class LessonDetailsComponent {
  //הצגת שיעור שנשלף מהURL
  lessonId: number = 0;
  lesson: any = null;

  constructor(private lessonService: LessonsService, private router: ActivatedRoute){ }
  

  ngOnInit(){
    this.lessonId = Number(this.router.snapshot.paramMap.get('id'));
    if (this.lessonId) {
      this.getLessonById(this.lessonId);
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

  getLessonById(id: number): void {
    this.lessonService.getLessonById(id).subscribe(
      (response: any) => {
        if (response) {
          this.lesson = response;
          console.log('Lesson fetched successfully:', this.lesson);
        } else {
          console.error('No lesson found with the given ID');
        }
      },
      (error) => {
        console.error('Error fetching lesson details:', error);
      }
    );
  }
  goBack(): void {
    window.history.back();
  }
  // editLesson(): void {
  //   this.lessonService.editLesson(this.lesson).subscribe(
  //     (response) => {
  //       console.log('Lesson updated successfully:', response);
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'שיעור עודכן בהצלחה',
  //         confirmButtonText: 'אישור'
  //       });
  //     },
  //     (error) => {
  //       console.error('Error updating lesson:', error);
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'שגיאה',
  //         text: 'שגיאה בעדכון השיעור.',
  //         confirmButtonText: 'אישור'
  //       });
  //     }
  //   );
  // }
        

}

