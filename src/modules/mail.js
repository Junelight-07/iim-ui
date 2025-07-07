class Mail {
    randomEmail() {
      const domains = ["gmail.com", "yahoo.com", "yahoo.fr", "edu.devinci.fr", "hotmail.com", "outlook.com", "outlook.fr"];
      const first = this.firstName().toLowerCase();
      const last = this.lastName().toLowerCase();
      const domain = domains[Math.floor(Math.random() * domains.length)];
      return `${first}.${last}@${domain}`;
    }
  }
  
module.exports = Mail;