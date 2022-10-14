export class Product{
  id: number;
  name: string;
  price: number;
  categoryId: number;
  description: string;
  img: string;
}

// normalde bu şekilde calısmıyor initilizar bekliyor bunu engellemek için ts.config sayfasından 

// {
//     ...
//     "compilerOptions": {
//           ....
//           "noImplicitReturns": false,
//           ....
//           "strictPropertyInitialization": false
//     },
//     "angularCompilerOptions": {
//        ......
//     }  
// }