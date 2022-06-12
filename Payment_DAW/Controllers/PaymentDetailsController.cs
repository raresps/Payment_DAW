using Microsoft.AspNetCore.Mvc;

namespace Payment_DAW.Controllers
{
    public class PaymentDetailsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
