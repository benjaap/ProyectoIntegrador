module.exports = function (sequelize, dataTypes) {
    let alias = "products";
    let cols = {
    
        id:  {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        description: {
            type: dataTypes.STRING
        },
        url_image: {
            type: dataTypes.STRING
        },
        users_id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },

    }
    
    let config = {
        timestamps:true,
       };
    
       const Products = sequelize.define(alias, cols, config);
    
       return Products;

    }
