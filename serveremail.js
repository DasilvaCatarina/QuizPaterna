
const fs = require("fs");

fs.readFile("emails.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Erro ao ler os e-mails:", err);
        return;
    }

    const emails = data.split("\n").filter(email => email.trim());
    if (emails.length === 0) {
        console.log("Nenhum e-mail registado");
        return;
    }

    const sorteado = emails[Math.floor(Math.random() * emails.length)];
    console.log("E-mail sorteado:", sorteado);
});