using System;
using System.Collections.Generic;

namespace eonboarding_portal_API.Models;

public partial class Candidate
{
    public int Id { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public DateTime? EnrollmentDate { get; set; }

    public DateTime? Dob { get; set; }

    public string? Nationality { get; set; }

    public string? Gender { get; set; }

    public string? Email { get; set; }

    public string? Phone { get; set; }

    public string? SchoolName { get; set; }

    public int? SchoolPercentage { get; set; }

    public string? CollegeName { get; set; }

    public string? CollegePercentage { get; set; }

    public string? PostCollege { get; set; }

    public int? PostCollegePercentage { get; set; }

    public virtual ICollection<CheckList> CheckLists { get; set; } = new List<CheckList>();

    public virtual ICollection<WorkExperience> WorkExperiences { get; set; } = new List<WorkExperience>();
}
