        const express = require("express");
        const bodyParser = require("body-parser");
        const multer = require("multer");
        const mysql = require('mysql');

        const app = express();
        const port = 9900;
        app.use(bodyParser.urlencoded());
        app.use(express.urlencoded({ extended: true }))
        var jsonParser = bodyParser.json();
        app.use(express.static("public"));
        const upload = multer({ dest: "./public/image" });

        //khai baso template
        app.set("view engine", "ejs");
        app.set("views", "./views");

       

    // ..............................DAMIN...............................//

    const adminRouter = require('./routes/admin');
    app.use('/admin',adminRouter);

    // .............................AND ADMIN.............................//

    // ..........................CLIENT...............................//

    const clientRouter = require('./routes/client');
    app.use('/',clientRouter);
    
    // .............................END CLIENT................................//

    const apiRouter = require('./routes/api');
    app.use('/api',apiRouter);


    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });