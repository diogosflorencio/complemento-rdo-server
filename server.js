const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Endpoint para verificar status do servidor de sincronização
app.get('/api/aware', (req, res) => {
  res.json({
    status: 'success',
    message: 'aaware',
    timestamp: new Date().toISOString(),
    server: 'sync-server-v1.0',
    uptime: process.uptime()
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

