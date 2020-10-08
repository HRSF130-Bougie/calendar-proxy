const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware')

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

//Harris - gallery
app.use('/listing/', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/favorites/', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/api/booking/listing/:id', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
//app.use('/api/booking/listing/reservation', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/api/review/:id', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/api/booking/listing/:id', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
