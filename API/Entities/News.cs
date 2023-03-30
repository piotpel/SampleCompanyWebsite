namespace API.Entities
{
    public class News
    {//TODO: In app add possibility for admits to upload news
        public int NewsId { get; set; }
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public string Teaser { get; set; }
        public string Content { get; set; }
        public DateTime UploadedAt { get; set; } = DateTime.UtcNow;
    }
}
