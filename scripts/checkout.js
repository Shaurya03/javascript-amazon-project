import { renderCheckoutHeader } from "./checkout/checkout-header.js";
import { renderOrderSummary } from "./checkout/order-summary.js";
import { renderPaymentSummary } from "./checkout/payment-summary.js";
import { loadProducts } from "./data/products.js";
import { loadCart } from "./data/cart.js";
// import './data/cart-class.js';

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value1');
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
    console.log(values);
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });

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



