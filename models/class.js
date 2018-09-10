module.exports = function (sequelize, DataTypes) {
  var Class = sequelize.define("Class", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
        isAfter: Sequelize.NOW
      }
      //need to use a place holder in the html
    },
    starttime: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        isAfter: Sequelize.NOW
      }
      //how do we want to validate time?
      //need to use a place holder in the html
    },
    endtime: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        isAfter: startTime
      }
      //how do we want to validate time?
      //need to use a place holder in the html
    },
    location: {
      type: DataTypes.TEXT,
      //category: (online, inperson),
      allowNull: false
    },
    maxStudents: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(1000000, 2),
      allowNull: false,
      //need to add validation for price
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    featured: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
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