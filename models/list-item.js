'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListItem = sequelize.define('ListItem', {
    name: DataTypes.STRING,
    col: DataTypes.INTEGER
  }, {});

  return ListItem;
};
