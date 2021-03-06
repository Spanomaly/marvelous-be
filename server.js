const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-parser');
const cors = require('@koa/cors');

const router = require('./routes');

const app = new Koa();
const PORT = 4000;

const db = require('./models');
db.sequelize.sync()
  .then(() => console.log('models synced!'))
  .catch(err=> console.log(err));


app.context.db = db;
app.use(bodyParser());
app.use(cors());
app.use(router.routes());

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
