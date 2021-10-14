import { Component } from '@angular/core'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootrap';
  dataBookSale:any;
  dataImgSlide:any;
  ImgSlide:any;
  dataBestBook:any;
  BestBook:any;
  linkBookSale = 'https://60d29896858b410017b2defb.mockapi.io/apibootrap';
  linkImgSlide = 'https://60d29896858b410017b2defb.mockapi.io/imgSlide';
  linkBestBook = 'https://60d29896858b410017b2defb.mockapi.io/bestBook';
  constructor(
    private http: HttpClient,
  ) {
    this.getListBoolSale();
    this.getListimgSlide();
    this.getBestBook();
  }
  getListBoolSale(){
    this.http.get(this.linkBookSale).subscribe(res =>{
      this.dataBookSale = res;
    })
  }
  getListimgSlide(){
    this.http.get(this.linkImgSlide).subscribe(res =>{
      this.dataImgSlide = res;
      this.ImgSlide = this.dataImgSlide[0].img;
    })
  }
  getBestBook(){
    this.http.get(this.linkBestBook).subscribe(res =>{
      this.dataBestBook = res;
      this.BestBook = this.dataBestBook[0].img;
      console.log(res)
    })
  }


}
