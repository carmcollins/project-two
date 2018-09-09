module.exports = function(sequelize, DataTypes) {
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
          type: DataTypes.DATE,
          allowNull: false
      },
      time:{
          type: DataTypes.INTEGER,
          allowNull: false
          //how do we want to validate time?
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
        type: DataTypes.INTEGER,
        allowNull: false
        //need to add validation for price
      },
      photo: {
        type: DataTypes.TEXT,
        isUrl: true,
        allowNull: true
      },
      featured: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        default: false
      }
    });
  
    Class.associate = function(models) {
      Class.belongsToMany(models.User, {
        through: "user_class_combined"
      });
    };
  
    return Class;
  };