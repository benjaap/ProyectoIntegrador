module.exports = function (sequelize, dataTypes) {
    let alias = "comments";
    let cols = {
        id:  {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        text_: {
            type: dataTypes.STRING
        },
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        user_id: {
            // autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        product_id: {
            // autoIncrement: true,
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
        underscored: true,
       };
    
       const Comments = sequelize.define(alias, cols, config);

     //    Comments.associate = function(models){
     //         Comments.belongsTo(models.User, {
     //             as: 'users',
     //             foreignKey: 'user_id'
     //         }),
     //         Comments.belongsTo(models.Product, {
     //             as: 'products',
     //             foreignKey: 'products_id'
     //         })
     //    }
       return Comments;

    }
