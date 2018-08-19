import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  //ch-66 ngSwitch
  // viewmode='map';
  //ch-67 ngFor
  // courses=[
  //   { id:'1',name:'course1'},
  //   { id:'2',name:'course2'},
  //   { id:'3',name:'course3'},
    
  // ];

  //ch-68 ngFor and chng detection
  // courses=[
  //     { id:'1',name:'course1'},
  //     { id:'2',name:'course2'},
  //    { id:'3',name:'course3'},
  //    ];
  //    onAdd()
  //    {
  //      this.courses.push({id:'4',name:"course4"})
  //      this.courses.push({id:'5',name:'course5'})
  //    }
  //    onRemove(course)
  //    {
  //      let index=this.courses.indexOf(course);
  //      this.courses.splice(index,2);
  //    }
  //    onChange(course)
  //    {course.name='updated';
  //    }

  //ch-69 ngfor trackBy-optimises both lines of code and memory
  // courses;
  // onload(){
  //   this.courses=[
  //         { id:'1',name:'course1'},
  //         { id:'2',name:'course2'},
  //        { id:'3',name:'course3'},
  //        ];
  // }
  // trackreference(index,course){
  //   return course? course.id : undefined;//checks if course is present,if yes returns its id
  // }
   // ch -72 ngStyle  
   //canSave=false;
    }
