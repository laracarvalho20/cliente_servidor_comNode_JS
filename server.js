const net = require('net');

const server = net.createServer(socket => {
  console.log('Cliente conectado');

  socket.on('data', data => {
    const message = data.toString().trim();
    console.log(`Mensagem recebida do cliente: ${message}`);

    // Enviar resposta de volta para o cliente
    socket.write('Mensagem recebida com sucesso!\n');
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});




