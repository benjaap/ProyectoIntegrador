module.exports = function (sequelize, dataTypes) {
    let alias = "products";
    let cols = {
    
        id:  {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name_: {
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
        user_id: {
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
        createdAt: false,
        updatedAt: false
       };
    
       const Products = sequelize.define(alias, cols, config);
    //  Modelos eliminados porque no paraban de dar errores
        Products.associate = function(models){
            Products.hasMany(models.Comment, {
                as: 'comments',
                foreignKey: 'products_id'
            }),
            Products.belongsTo(models.User,{
                as: "users",
                foreignKey: "user_id"
            })
        }
       return Products;

    }
