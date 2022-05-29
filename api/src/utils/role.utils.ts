import { Role } from "../models/Role";
import { User } from "../models/User";
import config from "../../lib/config";

export const PreloadData = async () => {
    try {
        // Role.find() searches my database for all existing roles and returns them in an array.
        const roles: Role[] = await Role.find();
        // if do not find them we create them
        console.log(roles);
        if (!roles.length) {
            // Super admin
            const superAdmin: Role = new Role();
            superAdmin.name = "super admin";
            await superAdmin.save();
            // Seller
            const seller: Role = new Role();
            seller.name = 'seller';
            await seller.save();
            // User
            const user: Role = new Role();
            user.name = 'user';
            await user.save();
        };

        // Now we create the user Super Admin with the credential we want:
        const sa: User | null = await User.findOne({
            where: { email: 'admin@secret.com' },
            relations: ['role']
        });
        // if do not find super admin we create it
        if (!sa) {
            const superAdminUser: User = new User();
            const superAdminRole: Role | null = await Role.findOne({ where: { name: 'super admin' } })
            superAdminUser.firstName = 'admin';
            superAdminUser.lastName = 'super';
            superAdminUser.email = 'admin@secret.com';
            superAdminUser.password = config.saPassword;
            if (superAdminRole) {
                superAdminUser.role = superAdminRole;
            }
            superAdminUser.save();
        }
        console.log(sa);
        return { message: 'Preload data successfully' }
    } catch (err: any | object) {
        return { error: err.message }
    }
}