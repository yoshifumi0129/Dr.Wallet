using System.ComponentModel.DataAnnotations;
namespace GroupCSample2.Models
{
    public class UserAccount
    {
        //ユーザーId
        public string? UserAccountId { get; set; }
        //ユーザーの名前
        public string? Name { get; set; }
        //年収
        public int YearlyIcome { set; get; }
        //家族構成
        public int Household { get; set; }

    }
}
