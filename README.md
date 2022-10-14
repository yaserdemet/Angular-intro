###  ng g pipe pipeName
### | pipeName : parametre
### ng c component componenetName => component olusturur.

### Two Binding [(ngModel)] = filterText bu inputu filterText e bagla demek 
- fakat bunu kullanabilmek için app modulde import {formsModule} from "@angular/forms"
- ve daha sonra imports : [ buraya ekle ] 

### *ngIf = "condition; else Name"
- <ng-template #Name> yapılmasını istediğin durum </ng-template>

###  <img [src] = "product.img" /> 
- binding [src] = "product.img"

### Event binding 
- <a (click) = "function()">

### To create services 
-  ng g service serviceName

### Routing 
- To create dynamic route <a routerLink = "product/category/{{item.id}}" >

```
const routes: Routes = [
  { path: 'product', component: ProductComponent },
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },

  {
    path : "product/category/:categoryId" , component : ProductComponent
  }
];
```