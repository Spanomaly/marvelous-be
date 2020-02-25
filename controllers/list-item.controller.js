const {pruneLogs} = require('../helpers/log-helpers');

module.exports = {
  async create(ctx){
    try {
      if(!ctx.request.body.name){
        ctx.throw(400, 'missing name');
      }
      if(!ctx.request.body.col){
        ctx.throw(400, 'missing column id');
      }
      const result = await ctx.db.ListItem.create({
        name: ctx.request.body.name,
        col: ctx.request.body.col
      });
      const log = await ctx.db.LogEntry.create({
        activity: `Created "${result.name}" and added it to Column ${result.col}`
      })
      pruneLogs(ctx);
      ctx.body = {
        log: log,
        item: result
      };
    }
    catch (err) {
      ctx.throw(500, err);
    }
  },
  async find(ctx) {
    try {
      ctx.body = {
        log: await ctx.db.LogEntry.findAll({
          order: [["createdAt", "DESC"]],
          limit: 10
        }),
        items: await ctx.db.ListItem.findAll({})
      };
    }
    catch(err) {
      ctx.throw(500, err);
    }
  },
  async destroy(ctx) {
    try {
      const item = await ctx.db.ListItem.findOne({
        where: { id: ctx.params.id }
      });
      const result = await ctx.db.ListItem.destroy({
        where: { id: ctx.params.id }
      });
      if(result === 0) {
        ctx.throw(400, "List item not found");
      } else {
        const log = await ctx.db.LogEntry.create({
          activity: `Deleted "${item.name}" from Column ${item.col}`
        });
        pruneLogs(ctx);
        ctx.body = {
          log,
          deleted: item.id
        };
      }
    }
    catch(err) {
      ctx.throw(500, err);
    }
  }
}
