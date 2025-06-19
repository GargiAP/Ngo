const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gargipratapwar:ZnJP8ql1kEiGy1ql@cluster0.58ztyt4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => console.error('❌ Connection error:', err));

