import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  productId = 0;
  constructor(private activateRoute:ActivatedRoute) { 
    this.activateRoute.params.subscribe(data =>{
      this.productId = data['id'];
    });
  }

  ngOnInit(): void {
  }

}
