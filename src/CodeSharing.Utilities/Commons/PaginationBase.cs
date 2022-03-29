namespace CodeSharing.Utilities.Commons;

public class PaginationBase
{
    public int PageIndex { get; set; }
    public int PageSize { get; set; }
    public int TotalRecords { get; set; }

    public int PageCount
    {
        get
        {
            //total records / size of page
            var pageCount = (double)TotalRecords / PageSize;
            return (int)Math.Ceiling(pageCount);
        }
    }
}