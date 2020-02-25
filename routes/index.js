const Router = require('koa-router');
const router = new Router();
const {ListItemController, LogEntryController} = require('../controllers');

router.post('/list-items', ListItemController.create);
router.get('/list-items', ListItemController.find);
router.delete('/list-items/:id', ListItemController.destroy);

router.get('/log-entries', LogEntryController.find);


module.exports = router;
