import { Component } from '@angular/core';
import { menuitem } from './menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title : string = 'Welcome to Chirpus Pizza!';
  // menuitem: menuitem = new menuitem("Chicken Fingers", "dinner", 11.99);  
  // items: string[] = ["Chicken Fingers", "Pizza", "Wings", "Breadsticks", "Ceasar Salad", "Cinnamon Roll"]
  // categorys: string[] = ["dinner", "dinner", "sides", "sides", "salads", "dessert"]
  // prices: number[] = [11.99, 11.99, 8.99, 4.99, 5.99, 8.99]
  items : menuitem[] = [new menuitem("Burger", "Pizza Burger", 8.00 ), new menuitem("Pizza","Veggie Pizza", 15), new menuitem("Calzone","Breaded cheese", 5.00), new menuitem("Wings"," Buffalo Wings", 6.00),new menuitem("Beverages","Drinks", 2.00), new menuitem("Ragatoni","Pasta", 4.00), new menuitem("Feta Salad","Salads", 5), new menuitem("Vanilla Ice Crea","Deserts", 4)];
}


