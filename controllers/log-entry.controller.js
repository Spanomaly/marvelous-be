module.exports = {
  async find(ctx) {
    try {
      ctx.body = await ctx.db.LogEntry.findAll({});
    }
    catch(err) {
      ctx.throw(500, err);
    }
  }
}
