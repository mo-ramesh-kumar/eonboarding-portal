using System;
using System.Collections.Generic;

namespace eonboarding_portal_API.Models;

public partial class CheckList
{
    public int Id { get; set; }

    public bool? EnrollCandidate { get; set; }

    public bool? ScreenCandidate { get; set; }

    public bool? InterviewScheduled { get; set; }

    public bool? InterviewDone { get; set; }

    public bool? OfferSent { get; set; }

    public bool? OfferAccepted { get; set; }

    public bool? WelcomeEmailSent { get; set; }

    public int? CandidateId { get; set; }

    public virtual Candidate? Candidate { get; set; }
}
