const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // para ler JSON no body dos POSTs

// valor inicial em memória
let awareMessage = "aware";

// Endpoint para verificar status do servidor de sincronização
app.get('/api/aware', (req, res) => {
  res.json({
    status: 'success',
    message: awareMessage,
    timestamp: new Date().toISOString(),
    server: 'sync-server-v1.0',
    uptime: process.uptime()
  });
});

// Endpoint para atualizar a mensagem do aware
app.post('/api/aware', (req, res) => {
  const { message } = req.body;
  awareMessage = message; // assume que sempre vem certo
  res.json({
    status: 'updated',
    message: awareMessage
  });
});

// Endpoint de health check para monitoramento
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor de sincronização rodando na porta ${PORT}`);
});
