namespace API.Entities
{
    public class Job
    {
        public int JobId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Tier { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public bool IsOpened { get; set; }
    }
}
