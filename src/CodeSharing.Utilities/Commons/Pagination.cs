namespace CodeSharing.Utilities.Commons;

public class Pagination<T> : PaginationBase where T : class
{
    public List<T> Items { get; set; }
}