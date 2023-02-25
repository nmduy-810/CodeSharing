using System.Text;
using System.Text.RegularExpressions;

namespace CodeSharing.Core.Helpers;

public static class TextHelper
{
    public static string ToUnsignString(string input)
    {
        input = input.Trim();
        for (var i = 0x20; i < 0x30; i++) input = input.Replace(((char)i).ToString(), " ");
        input = input.Replace(".", "-");
        input = input.Replace(" ", "-");
        input = input.Replace(",", "-");
        input = input.Replace(";", "-");
        input = input.Replace(":", "-");
        input = input.Replace("  ", "-");
        var regex = new Regex(@"\p{IsCombiningDiacriticalMarks}+");
        var str = input.Normalize(NormalizationForm.FormD);
        var str2 = regex.Replace(str, string.Empty).Replace('đ', 'd').Replace('Đ', 'D');
        while (str2.IndexOf("?") >= 0) str2 = str2.Remove(str2.IndexOf("?"), 1);
        while (str2.Contains("--")) str2 = str2.Replace("--", "-").ToLower();
        return str2;
    }
}