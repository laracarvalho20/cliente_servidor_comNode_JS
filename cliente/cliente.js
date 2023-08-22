const net = require('net');

const client = new net.Socket();

const HOST = '127.0.0.1';  // O endereço do servidor (localhost)
const PORT = 3000;         // A porta na qual o servidor está ouvindo

client.connect(PORT, HOST, () => {
  console.log('Cliente conectado ao servidor');
  
  // Enviar mensagem para o servidor
  client.write('Olá, servidor!');
});

client.on('data', data => {
  console.log(`Mensagem recebida do servidor: ${data}`);
  
  // Fechar a conexão após receber a resposta
  client.end();
});

client.on('close', () => {
  console.log('Conexão fechada');
});
