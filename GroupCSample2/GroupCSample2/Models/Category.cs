using GroupCSample2.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace GroupCSample2.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        //カテゴリーの種類(日用品など…)
        public string? CategoryName { get; set; }
    }
}
