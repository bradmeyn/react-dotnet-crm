using System;
using System.ComponentModel.DataAnnotations;

public class Client
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [StringLength(50)]
    public string FirstName { get; set; } = string.Empty; 
    
    [Required]
    [StringLength(50)]
    public string LastName { get; set; } = string.Empty;
    
    
    [Required]
    [Phone]
    [StringLength(20)]
    public string Phone { get; set; } = string.Empty;
    
    [Required]
    [EmailAddress]
    [StringLength(100)]
    public string Email { get; set; } = string.Empty;
}