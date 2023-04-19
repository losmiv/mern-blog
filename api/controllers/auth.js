import bcrypt from "bcrypt";
import { db } from "../db.js";
import jwt from "jsonwebtoken";


export const register = (req, res) => {
   
    // CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");

        // Hash the passwords and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
        const values = [
            req.body.username,
            req.body.email,
            hash
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created");
        });
    });
};

export const login = (req, res) => {
    
    // User exits
    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found!");

        // password validation
        console.log(req.body.password);
        console.log(data[0].password);
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );

        if (!isPasswordCorrect) {
            return res.status(400).json("Invalid username or password");
        }

        const token = jwt.sign({ id: data[0].id }, "jwtkey"); // jwtkey is weak secret key
        const { password, ...other } = data[0]; // separate password from rest of data

        res
            .cookie("access_token", token, {
                httpOnly: true
            })
            .status(200)
            .json(other); // pass in data without password
    });
};

export const logout = (req, res) => {
    
    res.clearCookie("access.token", {
        sameSite: "none",
        secure: true
    }).status(200).json("User has been logged out");
};
