import express from 'express';
import path from 'path';
const app = express();
const port = 3000;
// Middleware for static files and EJS templates
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('hello.ejs');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});