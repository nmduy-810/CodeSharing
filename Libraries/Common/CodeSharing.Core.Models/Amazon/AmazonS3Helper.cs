using Amazon;
using Amazon.Runtime;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;

namespace CodeSharing.Core.Models.Amazon;

public static class AmazonS3Helper
{
    private static readonly string _accessId = "AKIAQ5CNMO3BV5PJXN4X";
    private static readonly string _secret = "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";
    private static readonly string _bucketName = "codesharingserver";
    private static readonly string _folderName = "CoverImage/";
    private static readonly string _serverUrl = "https://s3-ap-southeast-1.amazonaws.com";
    private static readonly RegionEndpoint BucketRegion = RegionEndpoint.APSoutheast1;

    private static bool UploadFile(string fileName, byte[] content, out string fileUrl)
    {
        var filePath = $"{_folderName}{fileName}";
        fileUrl = string.Empty;

        var credentials = new BasicAWSCredentials(_accessId, _secret);
        IAmazonS3 client = new AmazonS3Client(credentials, BucketRegion);
        var transferUtility = new TransferUtility(client);

        try
        {
            using var stream = new MemoryStream(content);
            transferUtility.Upload(stream, _bucketName, filePath);
            fileUrl = $"{_serverUrl}/{_bucketName}/{filePath}";
            return true;
        }
        catch (Exception)
        {
            return false;
        }
    }

    public static bool UploadImage(string fileName, string imageBase64, out string imageUrl)
    {
        var content = Convert.FromBase64String(imageBase64);
        return UploadFile(fileName, content, out imageUrl);
    }

    public static string GetPresignedUrl(string url, int minutes = 1440)
    {
        var fileName = new Uri(url).AbsolutePath;
        var bucketFolder = $"/{_bucketName}";

        if (fileName.StartsWith(bucketFolder)) fileName = fileName.Replace(bucketFolder, string.Empty);

        if (fileName.StartsWith("/")) fileName = fileName.Remove(0, 1);

        try
        {
            var credentials = new BasicAWSCredentials(_accessId, _secret);
            IAmazonS3 client = new AmazonS3Client(credentials, BucketRegion);

            var request = new GetPreSignedUrlRequest
            {
                BucketName = _bucketName,
                Key = fileName,
                Verb = HttpVerb.GET,
                Expires = DateTime.Now.AddMinutes(minutes)
            };

            var preSignedUrl = client.GetPreSignedURL(request);
            return preSignedUrl;
        }
        catch (Exception)
        {
            return string.Empty;
        }
    }
}