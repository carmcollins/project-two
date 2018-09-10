module.exports = function(sequelize, DataTypes) {
    var userClassCombined = sequelize.define("user_class_combined", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
    });
    return userClassCombined;
};