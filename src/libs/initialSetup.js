import Role from "../models/Role";
import User from "../models/User";

import bcrypt from "bcryptjs";

export const createRoles = async () => {
  try {
    
    const count = await Role.estimatedDocumentCount();

    
    if (count > 0) return;

    // Create default Roles
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  
  const user = await User.findOne({ email: "admin@localhost" });
  
  const roles = await Role.find({ name: { $in: ["admin", "moderator"] } });

  if (!user) {
    
    await User.create({
      username: "admin",
      email: "admin@localhost",
      password: await bcrypt.hash("admin", 10),
      roles: roles.map((role) => role._id),
    });
    console.log('Admin User Created!')
  }
};