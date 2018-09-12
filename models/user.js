var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        // isEmail: true
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [2, 10]
      }
    }
  });

  User.associate = function (models) {

    User.belongsToMany(models.Class, {
      through: "user_class_combined"
    });
  };

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};