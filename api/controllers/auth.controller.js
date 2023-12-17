import { errorHandler } from "../Utils/error.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hashedPassword});
    try {
        await newUser.save();       // Cela peut prendre beaucoup de temps pour la sauvegarde. C'est pourquoi on ajoute await devant newUser.
        res.status(201).json("User created Successfully");    
    } catch (error) {
        next(error);
    }
            
}