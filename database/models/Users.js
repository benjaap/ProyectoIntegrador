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

   const User = sequelize.define(alias, cols, config);

   User.associate = (models)=>{

   User.hasMany(models.Products,{
       as:'products',
       foreingKey:'user_id'
   });

   User.hasMany(models.Comment,{
       as:'comments',
       foreingKey:'user_id'
   });
}
   
   return User;
  
}

