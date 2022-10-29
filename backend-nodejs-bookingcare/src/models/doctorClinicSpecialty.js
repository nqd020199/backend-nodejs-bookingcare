'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    //DCS stand for doctor clinic specialty
    class DCS extends Model {
        static associate(models) {
            // define association here
        }
    }
    DCS.init({
        // id: DataTypes.INTEGER,
        doctorId: DataTypes.STRING,
        clinicId: DataTypes.STRING,
        specialtyId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'DCS',
    });
    return DCS;
};