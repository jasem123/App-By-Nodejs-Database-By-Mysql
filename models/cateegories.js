'use strict';
module.exports = (sequelize, DataTypes) => {
  const cateegories = sequelize.define('cateegories', {
    name: DataTypes.STRING
  }, {});
  cateegories.associate = function(models) {
    // associations can be defined here
  };
  return cateegories;
};