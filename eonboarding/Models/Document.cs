using Microsoft.VisualBasic.FileIO;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eonboarding.Models;

public partial class Document
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public string? Name { get; set; }

    public DateTime? CreatedOn { get; set; }

    public string? Status { get; set; }

    public int? CreatedBy { get; set; }

    public bool? IsActive { get; set; }

    public bool? IsDeleted { get; set; }

    public string? AbsolutePath { get; set; }

    public string? RelativePath { get; set; }

    public int? CandidateId { get; set; }

    [NotMapped]
    public IFormFile FileDetails { get; set; }

}

