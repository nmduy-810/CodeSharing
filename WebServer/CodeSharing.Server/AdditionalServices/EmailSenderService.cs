using CodeSharing.DTL.Models.Commons;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.Options;
using MimeKit;

namespace CodeSharing.Server.AdditionalServices;

public class EmailSenderService : IEmailSender
{
    private readonly ILogger<EmailSenderService> _logger;
    private readonly MailSettings _mailSettings;

    public EmailSenderService(IOptions<MailSettings> mailSettings, ILogger<EmailSenderService> logger)
    {
        _mailSettings = mailSettings.Value;
        _logger = logger;
    }

    public async Task SendEmailAsync(string email, string subject, string htmlMessage)
    {
        var mimeMessage = new MimeMessage();
        mimeMessage.Sender = new MailboxAddress(_mailSettings.DisplayName, _mailSettings.Mail);
        mimeMessage.From.Add(new MailboxAddress(_mailSettings.DisplayName, _mailSettings.Mail));
        mimeMessage.To.Add(MailboxAddress.Parse(email));
        mimeMessage.Subject = subject;

        var builder = new BodyBuilder();
        builder.HtmlBody = htmlMessage;
        mimeMessage.Body = builder.ToMessageBody();

        // dùng SmtpClient của MailKit
        using var smtp = new SmtpClient();

        try
        {
            smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
            smtp.Authenticate(_mailSettings.Mail, _mailSettings.Password);
            await smtp.SendAsync(mimeMessage);
        }
        catch (Exception ex)
        {
            // Gửi mail thất bại, nội dung email sẽ lưu vào thư mục mailssave
            Directory.CreateDirectory("mailssave");
            var emailsavefile = $@"mailssave/{Guid.NewGuid()}.eml";
            await mimeMessage.WriteToAsync(emailsavefile);

            _logger.LogInformation("Send mail failed, save from - " + emailsavefile);
            _logger.LogError(ex.Message);
        }

        smtp.Disconnect(true);
        _logger.LogInformation("Send mail to " + email);
    }
}