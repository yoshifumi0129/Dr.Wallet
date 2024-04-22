using GroupCSample2.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace GroupCSample2.Models
{
    public class Balance
    {
        //収支テーブルのプライマリーキー
        public int BalanceId { get; set; }
        //カテゴリ-テーブルの外部キー　
        public int CategoryId { get; set; }    　 
        public Category? Category { get; set; }
        //収入or収支
        public string? Bop { get; set; }
        //金額
        public int Price { get; set; }
        //日付
        public DateTime DateTime { get; set; }
        //ユーザーアカウントの外部キー
        public string? UserAccountId { get; set; }
        public UserAccount? UserAccount { get; set; }
    }
}
