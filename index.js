
const express = require('express');
const app = express();
const PORT = 8001;

app.get('/', (req, res) => {
    res.send('Hello, CI/CD with Jenkins!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
