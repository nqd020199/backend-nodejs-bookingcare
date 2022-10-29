import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    //rest api
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.post('/add-user', homeController.addUser);
    router.get('/listuser', homeController.listUser);
    router.get('/edituser', homeController.editUser);
    router.post('/putuser', homeController.putUser);
    router.post('/deleteuser', homeController.deleteUser);

    //run
    return app.use("/", router);
}

module.exports = initWebRoutes;