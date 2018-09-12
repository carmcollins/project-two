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
    instructor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    starttime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    endtime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.TEXT,
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