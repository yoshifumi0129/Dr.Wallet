using Dr_WalletC.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace Dr_WalletC.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        //カテゴリーの種類(日用品など…)
        public string? CategoryName { get; set; }
    }
}
