module.exports = function (sequelize, dataTypes) {
    let alias = "users";
    let cols = {
    
        id:  {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name_: {
            type: dataTypes.STRING
        },
        surname: {
            type: dataTypes.STRING
        },
        birth_date : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        email: {
            type: dataTypes.STRING, 
            unique: true
        },
        password_: {
            type: dataTypes.STRING
        },
        dni: {
            type: dataTypes.STRING
        },
        avatar:{
            type: dataTypes.STRING
        }

    }

   let config = {
    timestamps:true,
    createdAt: false,
    updatedAt: false
   };

  

//    Users.associate = function(models){
    
//     Users.hasMany(models.Comment, {
//         as: 'comments',
//         foreignKey: 'user_id'
//     }),

//     Users.hasMany(models.Product,{
//         as:"products",
//         foreignKey: "user_id"
//     })

//     Users.hasMany(models.Product,{
//         as:"followers",
//         foreignKey: "follower_id"
// //     })
    
//     }





  

}

