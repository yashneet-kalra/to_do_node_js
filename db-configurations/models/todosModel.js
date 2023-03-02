module.exports = (sequelize, DataTypes) => {
    const Todos = sequelize.define("todos", {
        sno: {
            type:DataTypes.INTEGER
        },
        username: {
            type:DataTypes.STRING(50),
        },
        title: {
            type:DataTypes.TEXT,
            allowNull: false
        },
        isCompleted: {
            type:DataTypes.ENUM('0', '1')
        },
    }, 
    {
        // to prevent 'createdAt' and 'updatedAt' columns to be generated automatically
        timestamps: false
    }
    )
}