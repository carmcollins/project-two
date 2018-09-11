var moment = require("moment");

module.exports = function (sequelize, DataTypes) {
  var Class = sequelize.define("Class", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
      //need to use a place holder in the html
    },
    starttime: {
      type: DataTypes.TIME,
      allowNull: false
      //how do we want to validate time?
      //need to use a place holder in the html
    },
    endtime: {
      type: DataTypes.TIME,
      allowNull: false
      //how do we want to validate time?
      //need to use a place holder in the html
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    maxStudents: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    featured: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  });

  Class.associate = function (models) {
    Class.belongsToMany(models.User, {
      through: "user_class_combined"
    });
  };

  return Class;
};