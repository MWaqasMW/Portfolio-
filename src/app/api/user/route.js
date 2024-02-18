// pages/api/user.js

export default function handler(req, res) {
  const { method } = req;
  console.log("method----------", method);
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: "Name and age are required" });
  }

  const newUser = { name, age };

  return res.status(201).json({ user: newUser });
}
