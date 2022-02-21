const express = require('express');
const { engine } = require('express-handlebars');
const body = require('body-parser');
const session = require('express-session');
const app = express();
const { Pool } = require('pg');
app.use(express.static('public'));
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.engine(
    'handlebars',
    engine({ layoutsDir: 'views/layouts', defaultLayout: 'main' })
);
app.set('view engine', 'handlebars');
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
    })
);
var connectionstr = process.env.DATABASE_URL;
var pool;
if (connectionstr) {
    pool = new Pool({
        connectionString: connectionstr,
        ssl: { rejectUnauthorized: false },
    });
} else {
    pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        port: 5432,
        password: 'mthobisi',
        database: 'users',
        ssl: false,
    });
}

////------client
const useClient = require('./client-factory/client-Routes')(pool)

//get routes
app.get('/', useClient.homeRoutes);
app.get('/shop', useClient.shop);
app.get('/cart', useClient.cart);
app.get('/menu/:shop', useClient.menu);
///-------client end

////------business
const useBusiness = require('./business-factory/business-routes')(pool)
app.get('/newbusiness', useBusiness.registerBusiness)
    ///-------business end

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started on ' + PORT);
});