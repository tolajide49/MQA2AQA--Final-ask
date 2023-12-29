import LockedoutUser from "../Pages/LockedoutUserPage"
import LoginPage from "../Pages/LoginPage"

describe('Locked-Out User Login Test', () => {
    it('should display error message for locked-out user', () => {
      // Visit the login page
      LoginPage.visit();
  
      // Enter valid credentials for a locked-out user
      LockedoutUser.InputUsername();
      LockedoutUser.InputPassword();
      LockedoutUser.Login();
      // Verify the error message for the locked-out user
      LockedoutUser.ErrorMessageExisit();
      LockedoutUser.ErrorContainsText();
      // Ensure the user is not logged in
      LockedoutUser.UserNotLogedIn();
    })
  })
  