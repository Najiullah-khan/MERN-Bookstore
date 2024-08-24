import User from "../model/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email })
        const becrytepass = bcrypt.hashSync(password, 8);

        if (user) {
            return res.status(400).json({ message: "user already exist" })

        }
        const creatuser = new User({
            fullname, email, password: becrytepass
        })
        await creatuser.save();
        res.status(201).json({ message: "signup susesflly " ,user: {
            _id: creatuser._id, fullname: creatuser.fullname, email: creatuser.email}})

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "internal server error" })

    }

}

//For login

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.status(200).json({
            message: "Login successful", user: {
                _id: user._id, fullname: user.fullname, email: user.email

            }
        }); // Send the token if using JWT
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};