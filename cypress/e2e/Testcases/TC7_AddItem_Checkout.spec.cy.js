import loginPage from "../Pages/LoginPage";
import AddToCartPage from "../Pages/AddToCartPage";
import BuyItemCheckout from '../Pages/BuyItemCheckout'

describe('Buy item and complete checkout', function () {
    it('should buy an item and complete checkout', function () {
      // Visit the Sauce Demo website
      loginPage.visit();
  
      // Log in with valid credentials
      loginPage.setUsername();
      loginPage.setPassword();
      loginPage.clickLoginButton();
  
      // Add the first item to the cart
      AddToCartPage.ItemtoCart();
  
      // Open the cart
      AddToCartPage.openCart();
  
      // Click on the checkout button
      BuyItemCheckout.CheckOutButton();
  
      // Fill in checkout information
      BuyItemCheckout.CheckoutInfo();
      
      // Click on the continue button
      BuyItemCheckout.ContinueBTN();
  
      // Complete the checkout
      BuyItemCheckout.CompleteCheckout();
  
      // Verify that the thank you message is displayed
      BuyItemCheckout.MessageDisplayed();
    });
  });
  


  