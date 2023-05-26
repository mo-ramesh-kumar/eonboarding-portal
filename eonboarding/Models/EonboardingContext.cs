using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace eonboarding.Models;

public partial class EonboardingContext : DbContext
{
    public EonboardingContext()
    {
    }

    public EonboardingContext(DbContextOptions<EonboardingContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Candidate> Candidates { get; set; }

    public virtual DbSet<CheckList> CheckLists { get; set; }

    public virtual DbSet<Document> Documents { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<WorkExperience> WorkExperiences { get; set; }

//    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//        => optionsBuilder.UseSqlServer("Server=tcp:eonboarding.database.windows.net,1433;Initial Catalog=eonboarding;User ID=eonboarding;Password=mo@MO123456;Persist Security Info=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Candidate>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Candidat__3214EC07E07EE27C");

            entity.Property(e => e.CollegeName).HasMaxLength(50);
            entity.Property(e => e.CollegePercentage).HasMaxLength(50);
            entity.Property(e => e.Dob).HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(50);
            entity.Property(e => e.EnrollmentDate).HasColumnType("datetime");
            entity.Property(e => e.FirstName)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.Gender).HasMaxLength(50);
            entity.Property(e => e.LastName)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.Nationality).HasMaxLength(50);
            entity.Property(e => e.Phone).HasMaxLength(50);
            entity.Property(e => e.PostCollege).HasMaxLength(50);
            entity.Property(e => e.PostCollegePercentage).HasColumnName("postCollegePercentage");
            entity.Property(e => e.SchoolName).HasMaxLength(50);
        });

        modelBuilder.Entity<CheckList>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__CheckLis__3214EC0708B68FA2");

            entity.Property(e => e.Id).ValueGeneratedNever();

            //entity.HasOne(d => d.Candidate).WithMany(p => p.CheckLists)
            //    .HasForeignKey(d => d.CandidateId)
            //    .HasConstraintName("FK_Candidate_checklist");
        });

        modelBuilder.Entity<Document>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Document__3214EC07E03157CE");

            entity.Property(e => e.CreatedOn).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(50);
            entity.Property(e => e.Status).HasMaxLength(50);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3214EC07D00C8113");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.CreatedOn).HasColumnType("datetime");
            entity.Property(e => e.FirstName).HasMaxLength(50);
            entity.Property(e => e.IsActive).HasMaxLength(50);
            entity.Property(e => e.LastName).HasMaxLength(50);
            entity.Property(e => e.Password).HasMaxLength(50);
            entity.Property(e => e.UserName).HasMaxLength(50);
        });

        modelBuilder.Entity<WorkExperience>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__WorkExpe__3214EC07B8AB2E15");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.CurrentCompany).HasMaxLength(50);
            entity.Property(e => e.CurrentCtc)
                .HasMaxLength(50)
                .HasColumnName("CurrentCTC");
            entity.Property(e => e.CurrentDesignation).HasMaxLength(50);
            entity.Property(e => e.CurrentLocation).HasMaxLength(50);
            entity.Property(e => e.ExpectedCtc)
                .HasMaxLength(50)
                .HasColumnName("ExpectedCTC");
            entity.Property(e => e.PastCompany).HasMaxLength(50);
            entity.Property(e => e.Technology).HasMaxLength(50);

            //entity.HasOne(d => d.Candidate).WithMany(p => p.WorkExperiences)
            //    .HasForeignKey(d => d.CandidateId)
            //    .HasConstraintName("FK_Candidate_WorkExperiances");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
