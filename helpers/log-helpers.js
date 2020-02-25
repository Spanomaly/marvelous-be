module.exports = {
  async pruneLogs(ctx) {
    const maxLogEntries = 3;
    const count = await ctx.db.LogEntry.count();
    if(count > maxLogEntries) {
      await ctx.db.LogEntry.destroy({
        order: [["createdAt", "ASC"]],
        limit: count - maxLogEntries,
        where: {}
      });
    }
  }
}
