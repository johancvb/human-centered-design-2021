const express = require('express');
const app = express();
const port = 8000

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('public'))

app.get('/', function (req, res) {
	res.redirect('/home');
});

app.get('/home', function(req, res) {

    res.render('home')
})


// app.listen(port, function() {
//     console.log(`Web Application running on: http://localhost:${port}`)
// })

app.listen(process.env.PORT || port, () => console.log(`Web Application running on: http://localhost:${port}`));