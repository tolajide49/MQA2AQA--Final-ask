import loginPage from '../Pages/LoginPage';
import CartPage from '../Pages/AddToCartPage'

describe('Add item to cart and verify cart contents', function () {
  it('should add an item to the cart and verify cart contents', function () {
    // Visit the Sauce Demo website
    loginPage.visit();

    // Log in with valid credentials
    loginPage.setUsername();
    loginPage.setPassword();
    loginPage.clickLoginButton();

    // Add an item to the cart
    CartPage.ItemtoCart();

    // Open the cart
    CartPage.openCart();

    // Verify that the added item exists in the cart with correct name and price
    CartPage.verifyCartItem();

    
    
    // Ensure that the checkout button is enabled
    CartPage.checkoutButtonShouldBeEnabled();
  });
  });



  
  