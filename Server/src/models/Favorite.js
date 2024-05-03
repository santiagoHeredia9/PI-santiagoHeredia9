const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["Alive", "Dead", "Unknown"],
        allowNull: false,
        defaultValue: "Alive",
      },
      species: {
        type: DataTypes.ENUM,
        values: ["Human", "Alien", "Robot", "Unknown"], 
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["Male", "Female", "Genderless", "Unknown"], 
        allowNull: false,
      },
      origin: {
        type: DataTypes.JSONB,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
          isUrl: true, 
        },
      },
    },
    { timestamps: false }
  );
};
