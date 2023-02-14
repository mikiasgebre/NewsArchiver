using System.Reflection;
using congenial_octo_spork.Interfaces;
using congenial_octo_spork.Models;
using Google.Cloud.Firestore;

namespace congenial_octo_spork.DataAccess
{
    public class FirestoreDataAccessLayer : IFirestoreDataAccess
    {
        public FirestoreDataAccessLayer(FirestoreDb db)
        {
            _db = db;
        }

        public FirestoreDataAccessLayer()
        {
            string projectDirectory = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            string filepath = Path.Combine(projectDirectory, projectKeyFileNamePath);
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", filepath);
            _db = FirestoreDb.Create(projectId);
        }

        public async Task<ImageData> GetImageDataAsync(Timestamp selectedTimeStamp, Timestamp timestamp, string collectionName, Timestamp timestamp1)
        {
            try
            {

                DateTime date = selectedTimeStamp.ToDateTime().Date;
                CollectionReference collection = _db.Collection(collectionName);
                var query = collection.WhereGreaterThanOrEqualTo("date", timestamp).WhereLessThanOrEqualTo("date", timestamp1);
                var snapshot = await query.GetSnapshotAsync();

                ImageData? imageData = null;

                foreach (DocumentSnapshot document in snapshot.Documents)
                {
                    Timestamp queryTimestamp = document.GetValue<Timestamp>("date");
                    DateTime queryDateTime = queryTimestamp.ToDateTime().Date;
                    if (queryDateTime == date)
                    {
                        imageData = document.ConvertTo<ImageData>();
                        break;
                    }
                }

                return imageData;
            }
            catch (Exception)
            {
                throw;
            }

        }


        public async Task<ImageData> GetTodayImageDataAsync(Timestamp timestamp, string collectionName)
        {
            try
            {
                ImageData? imageData = null;
                DateTime date = DateTime.Today.Date;

                CollectionReference collection = _db.Collection(collectionName);
                var query = collection.WhereGreaterThanOrEqualTo("date", timestamp);
                var snapshot = await query.GetSnapshotAsync();

                foreach (DocumentSnapshot document in snapshot.Documents)
                {
                    Timestamp queryTimestamp = document.GetValue<Timestamp>("date");
                    DateTime queryDateTime = queryTimestamp.ToDateTime().Date;

                    if (date.Day.Equals(queryDateTime.Day))
                    {
                        imageData = document.ConvertTo<ImageData>();
                    }
                }
                return imageData;
            }

            catch (Exception)
            {
                throw;
            }
        }

        private readonly string projectId = "";
        private readonly string projectKeyFileNamePath = "";
        private FirestoreDb _db;
    }
}
