import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LessonsService } from 'src/app/services/lessons.service';
import { RegisterantService } from 'src/app/services/registrant.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  lessons: any[] = [];
  selectedLesson: any = null;
  lessonFullStatus: { [lessonId: number]: boolean } = {};

  constructor(private lessonService: LessonsService, private registerantService: RegisterantService, private router: Router) { }
  
  ngOnInit(): void {
    this.getLessons();
  }

  getLessons(): void {
    this.lessonService.getAllLessons().subscribe(
      (response: any[]) => {
        if (response && response.length > 0) {
          this.lessons = response;
          this.checkIfLessonsAreFull();
          console.log('Lessons fetched successfully:', this.lessons);
        } else {
          console.log('No lessons found');
          Swal.fire({
            icon: 'info',
            title: 'אין שיעורים',
            text: 'לא נמצאו שיעורים להצגה.',
            confirmButtonText: 'אישור'
          });
        }
      },
      (error) => {
        console.error('Error fetching lessons:', error);
        Swal.fire({
          icon: 'error',
          title: 'שגיאה',
          text: 'שגיאה בשרת, אנא נסה שוב מאוחר יותר.',
          confirmButtonText: 'אישור'
        });
      }
    );
  }

  checkIfLessonsAreFull() {
    this.lessons.forEach(lesson => {
      this.registerantService.getAllRegisterantsOfLesson(lesson.id).subscribe(registerants => {
        this.lessonFullStatus[lesson.id] = registerants.length >= 10;
      }, error => {
        console.error('Error fetching registrants for lesson', lesson.id, error);
        this.lessonFullStatus[lesson.id] = false;
      });
    });
  }


  goToLessonDetails(id: number): void {
    this.lessonService.getLessonById(id).subscribe(
      (data) =>{
        this.selectedLesson = data;
        this.router.navigate([`/lessons/${id}`]);
      },
      (error) => {
        console.error('Error fetching lesson details:', error);
        Swal.fire({
          icon: 'error',
          title: 'שגיאה',
          text: 'שגיאה בשרת, אנא נסה שוב מאוחר יותר.',
          confirmButtonText: 'אישור'
        });
      }
    ); 
  }
  isLessonExpired(startDate: string): boolean {
    const today = new Date();
    const lessonDate = new Date(startDate);
    return lessonDate < today; // בדיקה אם תאריך השיעור קטן מהיום
  }

  goBack(){
    this.lessonService.goBack();
  }
}
