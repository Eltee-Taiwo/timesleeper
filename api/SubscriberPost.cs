using System.ComponentModel.DataAnnotations;

namespace TaiwoTech.Enterprise.TimeSleeper.Api
{
    public class SubscriberPost
    {
        [Required]
        [ValidEmail]
        public required string EmailAddress { get; set; }
    }
}
