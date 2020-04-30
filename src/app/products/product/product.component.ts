import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  id = this.route.params.pipe(
    pluck('id')
  );
  product: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { }

}
