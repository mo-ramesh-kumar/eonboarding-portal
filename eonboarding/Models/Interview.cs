using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eonboarding.Models;

public partial class Interview
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public int CandidateId { get; set; }

    public string? Name { get; set; }

    public string? Interviewer { get; set; }

    public string? Rating { get; set; }

    public string? ReviewComment { get; set; }

    public string? Position { get; set; }

    public string? Status { get; set; }

    public DateTime? DoneOn { get; set; }
}
