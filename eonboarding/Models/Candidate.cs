using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace eonboarding.Models;

public partial class Candidate
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
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

    //[JsonIgnore]
    //public virtual ICollection<CheckList> CheckLists { get; set; } = new List<CheckList>();

    //[JsonIgnore]
    //[NotMapped]
    ////[Ignore]
    ////' in 'OnModelCreating'
    //public virtual ICollection<WorkExperience> WorkExperiences { get; set; } = new List<WorkExperience>();

    //[JsonIgnore]
    //[NotMapped]
    //public virtual ICollection<Document> Documents { get; set; } = new List<Document>();
}
