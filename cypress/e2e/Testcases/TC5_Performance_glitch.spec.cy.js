import PerformanceGlitchPage from "../Pages/PerformanceGlitchPage";

describe('login invalid for performance glitch user', function(){

    it('Check that a valid (performance_glitch_user) user can log-in with the valid credentials, but with long timeout.', () => {
      PerformanceGlitchPage.login();
      PerformanceGlitchPage.UrlPresent();     
      PerformanceGlitchPage.MenuBtn();
      PerformanceGlitchPage.SideBar();

    })
})