import { Component } from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootrap';
  listDomesticbooks = [
    {
      id: 0,
      title: 'Văn học'
    },
    {
      id: 1,
      title: 'Kinh tế'
    },
    {
      id: 2,
      title: 'Tâm lý - Kỹ năng sống'
    },
    {
      id: 3,
      title: 'Nuôi dạy con'
    },
    {
      id: 4,
      title: 'Sách thiếu nhi'
    },
    {
      id: 5,
      title: 'Tiểu sử - Hồi ký'
    },
    {
      id: 6,
      title: 'Sách học ngoại ngữ'
    }
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  bookType(id: any){
    if(id === 1){
      this.domesticBooks()
    }
  }


  domesticBooks() {
    this.router.navigate(['domesticbooks']).then();
  }


}
