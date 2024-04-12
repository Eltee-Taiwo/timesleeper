using System.ComponentModel.DataAnnotations;

namespace TaiwoTech.Enterprise.TimeSleeper.Api
{
    public class ValidEmailAttribute : RegularExpressionAttribute
    {
        public ValidEmailAttribute() : base(@"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$")
        {
        }
    }
}
