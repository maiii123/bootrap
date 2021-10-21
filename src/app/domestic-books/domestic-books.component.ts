import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-domestic-books',
  templateUrl: './domestic-books.component.html',
  styleUrls: ['./domestic-books.component.css']
})
export class DomesticBooksComponent implements OnInit {
  dataPage: any;
  page = 1;
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
    this.getListBoolSale()
    this.getBestBook()
  }

  ngOnInit(): void {
  }
  getListBoolSale(){
    this.http.get(this.linkBookSale).subscribe(res =>{
      this.dataBookSale = res;
      this.dataChange()
    })
  }
  getBestBook(){
    this.http.get(this.linkBestBook).subscribe(res =>{
      this.dataBestBook = res;
      this.BestBook = this.dataBestBook[0].img;
      this.dataChange()
    })
  }
  dataChange(){
    if( this.page === 1){
      this.dataPage = this.dataBookSale
    } else if(this.page === 2){
      this.dataPage = this.dataBookSale
    } else if(this.page === 3){
      this.dataPage = this.dataBestBook
    }
  }
  page1(){
    this.page = 1;
    this.dataChange()

  }
  page2(){
    this.page = 2;
    this.dataChange()

  }
  page3(){
    this.page = 3;
    this.dataChange()

  }


}

