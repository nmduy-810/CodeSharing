namespace CodeSharing.DTL.Models.Systems.Permission;

public class PermissionScreenVm
{
    public string Id { get; set; } = default!;
    public string Name { get; set; } = default!;
    public string ParentId { get; set; } = default!;
    public bool HasCreate { get; set; }
    public bool HasUpdate { get; set; }
    public bool HasDelete { get; set; }
    public bool HasView { get; set; }
    public bool HasApprove { get; set; }
}