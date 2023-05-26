using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace eonboarding.Models;

public partial class CheckList
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public bool? EnrollCandidate { get; set; }

    public bool? ScreenCandidate { get; set; }

    public bool? InterviewScheduled { get; set; }

    public bool? InterviewDone { get; set; }

    public bool? OfferSent { get; set; }

    public bool? OfferAccepted { get; set; }

    public bool? WelcomeEmailSent { get; set; }

    public int? CandidateId { get; set; }

    //[JsonIgnore]
    //public virtual Candidate? Candidate { get; set; }
}
