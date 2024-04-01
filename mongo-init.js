db.createUser(
        {
            user: process.env.MONGO_USER,
            pwd: process.env.MONGO_USER_PASSWORD,
            roles: [
                {
                    role: "readWrite",
                    db: process.env.MONGO_INITDB_DATABASE
                }
            ]
        }
);

db.createCollection('users');
db.createCollection('winelists');