module.exports = function (sequelize, dataTypes) {
    let alias = "followers";
    let cols = {

        id:  {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        nameFollowers: {
            type: dataTypes.STRING
        },

        birthdate : {
            type: dataTypes.DATE,
            allowNull:true,
        },

        password_: {
            type: dataTypes.STRING
        },

        email: {
            type: dataTypes.STRING
        },

        profile_photo:{
            type: dataTypes.STRING
        },

        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },

        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        }

    }

    let config = {
        timestamps:true,
        underscored: true,
       };
    
       

}

