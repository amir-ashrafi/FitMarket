import { Component } from '@angular/core';
import { Carousel } from "../../shared/component/home/carousel/carousel";
import { ProductFeatures } from "../../shared/component/home/product-features/product-features";
import { Category } from "../../shared/component/home/category/category";

@Component({
  selector: 'app-home',
  imports: [Carousel, ProductFeatures, Category],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
