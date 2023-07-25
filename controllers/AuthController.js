import User from "../models/User.js";

// Register new user
export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Create a new user in the database
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

// Login user
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database by username
    const user = await User.findOne({ username });

    // If the user is not found or the password does not match, return an error
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // If the user is found and the password matches, you can log them in (e.g., create a session, JWT token, etc.)
    // For the sake of this example, we'll just send back a success message.
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};
