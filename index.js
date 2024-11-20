import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());

app.get('/', (req, res) => {
    res.render('hello.ejs');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});