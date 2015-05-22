using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace JasmineFinal.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string ToUserName { get; set; }
        public string FromUserName { get; set; }
        public string UserMessage { get; set; }
        public DateTime DateSent { get; set; }
    }
    public class MessageContext : DbContext
    {
        public DbSet<Message> Mess { get; set; }
    }
}