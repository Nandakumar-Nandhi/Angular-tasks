import { Injectable } from '@angular/core';
import { FormType } from 'src/formType';
@Injectable({
  providedIn: 'root'
})

export class VcourseService {

  constructor() { }

  initialCourses:FormType[]=[];
  id=3;

  getCourses() : FormType[]{
    this.initialCourses=this.VIDEOCOURSES.slice(0,this.id);
    return this.initialCourses;
  }

  getCourse(id:string):any{
    return this.VIDEOCOURSES.find((course)=>{
      return course.id===id;
    });
  }

  getId():string{
    return Date.now() + ( (Math.random()*100000).toFixed())
  }

  addCourse(course:any){
    this.VIDEOCOURSES=[
      {id:this.getId(), ...course},
      ...this.VIDEOCOURSES
    ];
  }

  deleteCourse=(id:string)=>{
    let delIndex=this.VIDEOCOURSES.findIndex((course)=>{
      return course.id===id;
    });
    console.log("Deleted index is ",delIndex);
    this.VIDEOCOURSES.splice(delIndex,1);
  }

  updateCourse(video:any){
    let updateIndex=this.VIDEOCOURSES.findIndex((course)=>{
      return course.id===video.id;
    });
    console.log("updateIndex is ",updateIndex);
    this.VIDEOCOURSES[updateIndex]={
      ...video
    }
  }

  loadMore(){
    let nextCourses=this.VIDEOCOURSES.slice(this.id,this.id+3);
    this.initialCourses=[
      ...this.initialCourses,
      ...nextCourses
    ]
    this.id+=3;
  }

  VIDEOCOURSES:FormType[]=[
    {
        id:"1",
        videoTitle: 'HTML 5 Advanced',
        description: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.',
        date:new Date('12-03-2019').toISOString().split('T')[0],
        duration: '120',
        authors: 'Qwerty,Asdfghjkl'
      },
      {
        id:"2",
        videoTitle: 'CSS 3',
        description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
        date: new Date('03-14-2022').toISOString().split('T')[0],
        duration: '210',
        authors: 'Qwerty,Asdfghjkl'
      },
      {
        id:"3",
        videoTitle: 'Javascript',
        description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.',
        date: new Date('09-07-2020').toISOString().split('T')[0],
        duration: '190',
        authors: 'Qwerty,Asdfghjkl'
      },
      {
        id:"4",
        videoTitle: 'Node.js',
        description: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.',
        date:new Date('12-03-2019').toISOString().split('T')[0],
        duration: '120',
        authors: 'Qwerty,Asdfghjkl'
      },
      {
        id:"5",
        videoTitle: 'Express',
        description: 'Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.',
        date: new Date('03-14-2022').toISOString().split('T')[0],
        duration: '210',
        authors: 'Qwerty,Asdfghjkl'
      },
      {
        id:"6",
        videoTitle: 'MongoDB',
        description: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
        date: new Date('09-07-2020').toISOString().split('T')[0],
        duration: '190',
        authors: 'Qwerty,Asdfghjkl'
      }
  ];

}


