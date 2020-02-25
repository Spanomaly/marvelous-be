'use strict';
module.exports = (sequelize, DataTypes) => {
  const LogEntry = sequelize.define('LogEntry', {
    activity: DataTypes.STRING
  }, {});

  return LogEntry;
};
