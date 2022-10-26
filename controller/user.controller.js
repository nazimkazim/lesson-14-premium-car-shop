import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class UserController {
    async createUser(req, res) {
        try {
            const {name, email, password, role} = req.body;
            const isUserExist = await User.findOne({email});
            if (isUserExist) {
                return res.status(400).json({message: 'User already exists'});
            }
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt);
            const user = new User({name, email, password:hashPassword, role});
            await user.save();
            return res.json(user);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if (!user) {
                return res.status(400).json({message: 'User not found'});
            }
            const isPasswordValid = bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({message: 'Invalid password'});
            }
            const token = jwt.sign({id: user.id, role:user.role}, process.env.SECRET_KEY, {expiresIn: '1h'});
            res.cookie('access_token', token, {httpOnly: true}).status(200).json({token, userId:user.id, role:user.role});

        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default new UserController();