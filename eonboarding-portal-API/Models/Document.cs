using System;
using System.Collections.Generic;

namespace eonboarding_portal_API.Models;

public partial class Document
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public DateTime? CreatedOn { get; set; }

    public string? Status { get; set; }

    public int? CreatedBy { get; set; }

    public bool? IsActive { get; set; }

    public bool? IsDeleted { get; set; }
}
