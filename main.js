const PRODUCT_TYPE = {
    MILK_FOOD: 1,
    FRUIT: 2,
    VEGETABLE: 3,
    CLOTHES: 4,
    BAKERY: 5,
  }
  
  const data = [
    {
      name: 'Milk',
      price: 20,
      quantity: 1,
      type: PRODUCT_TYPE.MILK_FOOD,
    },
    {
      name: 'Apple',
      price: 10,
      quantity: 3,
      type: PRODUCT_TYPE.FRUIT,
    },
    {
      name: 'Butter',
      price: 12,
      quantity: 1,
      type: PRODUCT_TYPE.MILK_FOOD,
    },
    {
      name: 'Bread',
      price: 23,
      quantity: 1,
      type: PRODUCT_TYPE.BAKERY,
    },
    {
      name: 'Orange',
      price: 12,
      quantity: 3,
      type: PRODUCT_TYPE.FRUIT,
    },
    {
      name: 'T-Shirt',
      price: 200,
      quantity: 1,
      type: PRODUCT_TYPE.CLOTHES,
    },
    {
      name: 'Jacket',
      price: 400,
      quantity: 1,
      type: PRODUCT_TYPE.CLOTHES,
    },
    {
      name: 'Tomato',
      price: 15,
      quantity: 5,
      type: PRODUCT_TYPE.VEGETABLE,
    },
    {
      name: 'Onion',
      price: 10,
      quantity: 4,
      type: PRODUCT_TYPE.VEGETABLE,
    },
  ];
  
  const data1 = [
    {
      name: 'Milk',
      price: 20,
      quantity: 2,
      type: PRODUCT_TYPE.MILK_FOOD,
    },
    {
      name: 'Apple',
      price: 10,
      quantity: 3,
      type: PRODUCT_TYPE.FRUIT,
    },
    {
      name: 'Bread',
      price: 23,
      quantity: 1,
      type: PRODUCT_TYPE.BAKERY,
    },
    {
      name: 'T-Shirt',
      price: 200,
      quantity: 1,
      type: PRODUCT_TYPE.CLOTHES,
    },
    {
      name: 'Jacket',
      price: 400,
      quantity: 1,
      type: PRODUCT_TYPE.CLOTHES,
    },
    {
      name: 'Onion',
      price: 10,
      quantity: 4,
      type: PRODUCT_TYPE.VEGETABLE,
    },
  ];

  //Домашка 16
 
  /*function filterProducts(products, productType) {
    const result = [];
    for (let i=0; i < products.length; i++) {
      let product = products[i];    
      if (product.type == productType) {
        result.push(product);
      } 
    } 
    return result;
  }
  
  let result1 = filterProducts(data, PRODUCT_TYPE.MILK_FOOD);
  console.log(result1);
  result1 = filterProducts(data, PRODUCT_TYPE.FRUIT);
  console.log(result1);*/
  
  //let result2 = data.filter(function(product) {
   // return product.type == PRODUCT_TYPE.MILK_FOOD;
  //});
  
  //console.log(result2);
  
  //-Домашка 17----------------------------------------------
  function Products(array) {
    const products = array;
    this.addProduct = function(product) {
      products.push(product);
    };
    this.getProductsByType = function(productType) {
      const result = [];
      for (let i=0; i < products.length; i++) {
        let product = products[i];    
        if (product.type == productType) {
          result.push(product);
        } 
      } 
      return result;
    };
    this.getSum = function() {
      let sum = 0;
      for(let i=0; i<products.length; i++) {
        let product = products[i];
       sum+= product.quantity * product.price;
      }
      return sum;
    };
    this.getSumByType = function(productType) {    
      const specificProducts = this.getProductsByType(productType);
      let sum = 0;
      for(let i=0; i<specificProducts.length; i++) {
        let product = specificProducts[i];
       sum+= product.quantity * product.price;
      }
      return sum;
    };
    };
    let products1 = new Products(data);
    console.log(products1.getSum());
    console.log(products1.getSumByType(PRODUCT_TYPE.MILK_FOOD));
    products1.addProduct({
    name: 'Lemon',
    price: 5,
    quantity: 2,
    type: PRODUCT_TYPE.FRUIT,
   });
   console.log(products1.getProductsByType(PRODUCT_TYPE.MILK_FOOD));
   console.log(data);