import db from '../models';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

let hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let changePassword = await bcrypt.hashSync(password, salt);
            resolve(changePassword);
        } catch (e) {
            reject(e);
        }
    })
}

let createUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPass = await hashPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPass,
                firstName: data.firstname,
                lastName: data.lastname,
                address: data.address,
                phoneNumber: data.phone,
                gender: data.gender == 1 ? true : false,
                roleId: data.roleId,
            })
            let listdata = db.User.findAll({
                raw: true
            });
            resolve(listdata);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listdata = db.User.findAll({
                raw: true
            });
            resolve(listdata);
        } catch (e) {
            reject(e);
        }
    })
}
let editUserById = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: data }, raw: true })
            if (!user) return;
            resolve(user);
        } catch (e) {
            reject(e);
        }
    })
}
let updateUserId = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                await user.save();

                let listdata = db.User.findAll({
                    raw: true
                });
                resolve(listdata);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deleteUserById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userdelete = await db.User.findOne({
                where: { id: id }
            })
            if (userdelete) {
                await userdelete.destroy();
                let listdata = db.User.findAll({
                    raw: true
                });
                resolve(listdata);
            }

        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createUser,
    getAllUser,
    editUserById,
    updateUserId,
    deleteUserById,
}