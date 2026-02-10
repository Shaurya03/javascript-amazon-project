import { renderCheckoutHeader } from "./checkout/checkout-header.js";
import { renderOrderSummary } from "./checkout/order-summary.js";
import { renderPaymentSummary } from "./checkout/payment-summary.js";
import { loadProductsFetch } from "./data/products.js";
import { loadCartFetch } from "./data/cart.js";
// import './data/cart-class.js';

async function loadPage() {
  try {
    // throw 'error1';

    await Promise.all([
     loadProductsFetch(),
     loadCartFetch()
    ])

    /*
    await new Promise((resolve, reject) => {
      // throw 'error2';
      loadCart(() => {
        // reject('error3');
        resolve();
      });
    });
    */

  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }
  
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}); 
*/

/*
loadProducts(() => {
  loadCart(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
  });
});
*/



