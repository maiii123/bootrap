import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss']
})
export class BookStoreComponent implements OnInit {
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
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.getListBoolSale();
    this.getListimgSlide();
    this.getBestBook();
  }

  ngOnInit(): void {
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
