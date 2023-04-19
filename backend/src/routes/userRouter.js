const StatusCodes = require('http-status-codes')
//import { validate } from "class-validator";
const firebase = require('firebase');
const UserService = require("../services/userService")
//import { checkRole } from "../middlewares/checkRole"
const User = require("../models/user")
const express = require("express")
// userRoles from "../models/userRoles";
const Joi = require("joi");

// get one user
function getUserById(userService) {
    return async function (req, res, next) {
        const id = req.params.id
        console.log(id)

        try {
            const user = await userService.getUser(id)
            if (!user) {
                res.status(StatusCodes.NOT_FOUND).json()
                return
            }
            res.status(StatusCodes.OK).json(user)
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
            return
        }
    }
}

function newUser(userService) {
    return async function (req, res) {
        try{
            const { name, surname, email, password } = req.body;
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = new User();
            user.name = name;
            user.surname = surname;
            user.email = email;
            user.module_access = [true, false, false, false, false, false, false, false, false, false, false, false, false, false];
            
            const serializedUser = JSON.parse(JSON.stringify(user));
            await userService.newUser(serializedUser);

            res.send(`Signed up successfully! User`);
        } catch(error){
            res.status(500).send(`Signup failed: ${error.message}`);
        }
    };
}

function userRouter() {
    const router = express.Router()
    const userService = new UserService()

    router.get("/:id", getUserById(userService))
    router.post("/signup", newUser(userService));
    

    return router
}

module.exports = userRouter