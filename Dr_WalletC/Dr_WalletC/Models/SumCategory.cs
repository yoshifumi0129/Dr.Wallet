namespace Dr_WalletC.Models
{
    public class SumCategory
    {
      public string Category { get; set; }

      public int SumCategorys { get; set; }

      public SumCategory(string category,int sum)
        {
            this.Category = category;
            this.SumCategorys = sum;
        }
    }
}
