namespace congenial_octo_spork.Models
{
    using Google.Cloud.Firestore;

    [FirestoreData]
    public class ImageData
    {
        [FirestoreProperty]
        public string imageUrl { get; set; } = string.Empty;

        [FirestoreProperty]
        public Timestamp date { get; set; }
    }

}
