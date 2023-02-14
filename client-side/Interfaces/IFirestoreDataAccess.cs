using congenial_octo_spork.Models;
using Google.Cloud.Firestore;

namespace congenial_octo_spork.Interfaces
{
    public interface IFirestoreDataAccess
    {
        Task<ImageData> GetImageDataAsync(Timestamp selectedTimeStamp,Timestamp timestamp, string collectionName,Timestamp timestamp1);

        Task<ImageData> GetTodayImageDataAsync(Timestamp timestamp, string collectionName);
    }
}
