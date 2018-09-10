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
        isEmail: true
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
    },
    photo: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true
      }
    }
  });

  User.associate = function (models) {

    User.belongsToMany(models.Class, {
      through: "user_class_combined"
    });
  };

  return User;
};