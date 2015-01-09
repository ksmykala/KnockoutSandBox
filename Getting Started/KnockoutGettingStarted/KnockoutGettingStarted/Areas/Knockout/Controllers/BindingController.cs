
namespace KnockoutGettingStarted.Areas.Knockout.Controllers
{
    using System.Collections.Generic;
    using System.IO;
    using System.Web.Mvc;

    public class BindingController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Modal()
        {
            return View();
        }

        public ActionResult WhenYouAreBored()
        {
            var againstBoringList = new List<string>();
            using (var file = new StreamReader(HttpContext.Server.MapPath("~/Areas/Knockout/Models/AgainstBoringList.txt")))
            {
                string line;
                while ((line = file.ReadLine())!=null)
                {
                    againstBoringList.Add(line);
                }
            }

            return View(againstBoringList.ToArray());
        }
    }
}