import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css']
})
export class ProductIdComponent implements OnInit {
  queryParams = '';
  searchKeyword = '';
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { 
    this.activatedRoute.params.subscribe(data =>{
        this.searchKeyword = data['id'];
    });
  }

  ngOnInit(): void {
  }

  updateSearch(){
    const searchVal = this.searchKeyword;
    this.router.navigate(['product-id',searchVal]);
  }

}
