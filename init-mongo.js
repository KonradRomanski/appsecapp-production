var adminUsername = process.env.MONGO_ROOT_USER;
var adminPassword = process.env.MONGO_ROOT_PASSWORD;
var authDb = 'admin';

var adminDB = db.getSiblingDB(authDb);
adminDB.auth(adminUsername, adminPassword);

var username = process.env.DB_USER;
var password = process.env.DB_PASS;
var database = process.env.MONGODB_DATABASE;

db.createUser({
  user: username,
  pwd: password,
  roles: [
    {
      role: 'readWrite',
      db: database,
    },
  ],
});
db.getSiblingDB(database).users.insertOne({
  email: 'admin@admin.com',
  password: process.env.APP_ADMIN_PASSWORD,
  name: 'Admin User',
  role: 'admin',
});

db.getSiblingDB(database).users.insertOne({
  email: 'user@example.com',
  password: process.env.APP_USER_PASSWORD,
  name: 'Normal User',
  role: 'user',
});

adminDB.logout();
