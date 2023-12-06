const nodemailer = require("nodemailer");

async function sendEmail(emailContent) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });

    await transporter.sendMail(emailContent);
}

function formatarData(data) {
    const dataObjeto = new Date(data);

    const dia = String(dataObjeto.getDate()).padStart(2, "0");
    const mes = String(dataObjeto.getMonth() + 1).padStart(2, "0");
    const ano = dataObjeto.getFullYear();
    const hora = String(dataObjeto.getHours()).padStart(2, "0");
    const minutos = String(dataObjeto.getMinutes()).padStart(2, "0");

    return `${dia}/${mes}/${ano} ${hora}:${minutos}`;
}

export async function POST(req) {
    const dados = await req.json();
    const { nome, email, numero, data } = dados;

    const dataFormatada = formatarData(data);

    console.log("Agendamento Salvo:", { nome, email, numero, dataFormatada });

    const emailDest = {
        from: process.env.USER,
        to: email,
        subject: "Novo agendamento",
        html: `
        <html>
        <head>
            <style>
                /* Estilos CSS para o e-mail */
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                }
                .container {
                    width: 80%;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background-color: #6A5ACD;
                    color: #fff;
                    padding: 10px;
                    text-align: center;
                    border-radius: 5px 5px 0 0;
                }
                .content {
                    padding: 20px;
                    background-color: black;
                    color: white;
                    font-weight: 600;
                    font-size: 14px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Novo agendamento</h1>
                </div>
                <div class="content">
                    <p>Novo agendamento marcado para: ${dataFormatada}</p>
                    <p>Cliente: ${nome}</p>
                    <p>Telefone: ${numero}</p>
                    <p>Parabéns. Você realizou seu agendamento com sucesso.</p>
                </div>
            </div>
        </body>
    </html>
        `,
    };

    const emailContent = {
        from: process.env.USER,
        to: process.env.USER,
        subject: "Novo agendamento",
        html: `
        <html>
        <head>
            <style>
                /* Estilos CSS para o e-mail */
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                }
                .container {
                    width: 80%;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background-color: #6A5ACD;
                    color: #fff;
                    padding: 10px;
                    text-align: center;
                    border-radius: 5px 5px 0 0;
                }
                .content {
                    padding: 20px;
                    background-color: black;
                    color: white;
                    font-weight: 600;
                    font-size: 14px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Novo agendamento</h1>
                </div>
                <div class="content">
                    <p>Novo agendamento marcado para: ${dataFormatada}</p>
                    <p>Cliente: ${nome}</p>
                    <p>Telefone: ${numero}</p>
                </div>
            </div>
        </body>
    </html>
        `,
    };

    try {
        await Promise.all([sendEmail(emailDest), sendEmail(emailContent)]);
        return Response.json({ teste: "Email enviado com sucesso!" });
    } catch (error) {
        return Response.json({
            Error: "Erro ao enviar o e-mail:",
            error,
        });
    }
}
