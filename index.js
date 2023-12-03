import express from 'express';
import router from './router/router.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Server is ready');
}

);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
}
);

