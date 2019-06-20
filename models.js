const Sequelize = require('sequelize');

// const sequelize = new Sequelize({
//   database: 'PWR_db',
//   dialect: 'postgres',
//   define: {
//     underscored: true, // use underscored column names for columns generated by sequelize (e.g. timestamps as created_at rather than createdAt)
//   }
// });

const db = new Sequelize(process.env.DATABASE_URL , {
  dialect: 'postgres'
});

const Workout = sequelize.define('workout', {
    name: Sequelize.STRING,
    duration: Sequelize.INTEGER,
    description: Sequelize.TEXT,
    difficulty: Sequelize.STRING,
    regimen: { type: Sequelize.BOOLEAN,
      defaultValue: false },
    youtube_url: Sequelize.TEXT
});

const Category = sequelize.define('category', {
    title: Sequelize.STRING,
    background_url: Sequelize.TEXT
});

Category.hasMany(Workout)
Workout.belongsTo(Category)

module.exports = {
  sequelize,
  Workout,
  Category
};
