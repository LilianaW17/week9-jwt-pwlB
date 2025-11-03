const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Username dan password dibutuhkan" });
        }
        
        const [existing] = await db.query("SELECT id FROM users WHERE username = ?", [username]);
        if (existing.length > 0) {
            return res.status(409).json({ message: "Username sudah ada" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        
        await db.query(
            "INSERT INTO users (username, password, role) VALUES (?, ?, 'admin')",
            [username, hashedPassword]
        );

        res.status(201).json({ success: true, message: "Admin berhasil didaftarkan" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Username dan password dibutuhkan" });
        }
        
        const [existing] = await db.query("SELECT id FROM users WHERE username = ?", [username]);
        if (existing.length > 0) {
            return res.status(409).json({ message: "Username sudah ada" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        
        await db.query(
            "INSERT INTO users (username, password, role) VALUES (?, ?, 'user')",
            [username, hashedPassword]
        );

        res.status(201).json({ success: true, message: "User berhasil didaftarkan" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Username dan password dibutuhkan" });
        }
        const [results] = await db.query("SELECT * FROM users WHERE username = ?", [username]);
        const user = results[0];
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: "Username atau password salah" });
        }

        const payload = {
            id: user.id,
            username: user.username,
            role: user.role 
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ success: true, token: token });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};