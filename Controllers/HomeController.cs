using Microsoft.AspNetCore.Mvc;

namespace portfolio.controllers{
    public class HomeController : Controller{
        public IActionResult Index(){
            return View();
        }
    }
}