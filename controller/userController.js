import user from "../model/User.js";
import User from "../model/User.js";
import bcrypt from "bcrypt";
export const resgistration = async (req, res) => {
  try {
    const { name, gmail, password } = req.body;
    const exist = await User.findOne({ gmail: gmail });
                 // or
    // const exist = await User.findOne({ gmail: req.body.gmail });
    if (exist) {
      return res.status(401).json({ message: "username alredy exist" });
    }

    // const user = req.body
    // console.log(user);
    // const newUser = new User(user);

    // other way
    const hashedPassword = await bcrypt.hash(password, 10);  //bcrypt to hide password

    const newUser = new User({ name, gmail, password: hashedPassword });
    await newUser.save();
    res.status(200).json({ message: newUser });

    // create a new user
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    // const { name, gmail, password } = req.body;
    const gmail = req.body.gmail;
    const password = req.body.password;
    let user = await User.findOne({ gmail: gmail, password: password });

    if (user) {
      return res.status(200).json({ data: user });
    } else {
      res.status(401).json("password didnot match");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
