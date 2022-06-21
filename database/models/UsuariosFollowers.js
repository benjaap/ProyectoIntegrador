module.exports = function(sequelize, dataTypes){
    let alias ='UsuariosFollowers'

    let cols = {
        id:  {
            // autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        users_id: {
            // autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        followers_id: {
            // autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
    }

    let config = {
        timestamps:true,
        underscored: true,
       };
    
       const UsuariosFollowers= sequelize.define(alias, cols, config);
    
       return UsuariosFollowers;

    }