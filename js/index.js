// ITERATION 1

function updateSubtotal(product) {
  const price = (product.querySelector('.price span').innerHTML);
  let quantity = (product.querySelector('.quantity input').value);
  let subTotal = price * quantity;
  console.log(subTotal);
  product.querySelector('.subtotal span').innerHTML = subTotal; //puts calc into webpage subtotal
  return subTotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // let totalSum= 0;
  // const singleProduct = document.querySelectorAll('.product');
  // singleProduct.forEach(product => {
  //   totalSum += updateSubtotal(product);
  // })


  // ITERATION 2
  //... your code goes here
  //document.querySelector("#total-value span").innerHTML = total;
  let totalSum=0;
  const product=document.getElementsByClassName('product');
  const productArray=[...product];
  productArray.forEach((item) => {
    totalSum += updateSubtotal(item);
  });
  //console.log(updateSubtotal());

  // ITERATION 3
  //... your code goes here
let total = document.querySelector('#total-value span');
total.innerHTML = totalSum;
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
