import User from '../models/user.model.js';
export const signup = async(req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new User({ username, email, hashedPassword });
    await newUser.save()
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(400).json({ error: err.message });
        });
}