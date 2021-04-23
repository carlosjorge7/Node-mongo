const mongoose = require('mongoose');
const URI = 'mongodb://localhost/prueba_local';

(async () => {
    try{
        const db = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Base de datos conectada a:' , db.connection.name);
    }
    catch(error) {
       console.log(error);
    }
})();