import db from '../models/index'
import CRUDUser from '../services/service'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', { data: JSON.stringify(data) });
    } catch (e) {
    }
}

let getAboutPage = (req, res) => {
    return res.render('about.ejs');
}

let addUser = async (req, res) => {
    let createData = await CRUDUser.createUser(req.body);
    return res.render('listuser.ejs', { data: createData });
}

let listUser = async (req, res) => {
    let data = await CRUDUser.getAllUser();
    return res.render('listuser.ejs', { data });
}
let editUser = async (req, res) => {
    let userId = req.query.id;
    if (!userId) return;
    let dataUpdate = await CRUDUser.editUserById(userId);
    if (dataUpdate) return res.render('edituser.ejs', { dataUpdate })
}

let putUser = async (req, res) => {
    let data = req.body;
    let updateUser = await CRUDUser.updateUserId(data);
    return res.render('listuser.ejs', { data: updateUser });
}

let deleteUser = async (req, res) => {
    let userId = req.query.id;
    let updateUser = await CRUDUser.deleteUserById(userId);
    return res.render('listuser.ejs', { data: updateUser });
}



module.exports = {
    getHomePage, getAboutPage, addUser, listUser, editUser, putUser, deleteUser,
}