import {createHmac, randomBytes} from 'node:crypto'
import { prismaClient } from "../lib/db";
import JWT from 'jsonwebtoken';

const JWT_SECRET = 'DCSDVSDSDCDCSD';

export interface createUserPayload{
    firstName: string
    lastName?: string
    email: string
    password: string
}

export interface getUserTokenPayload{
    email: string
    password: string
}

class UserService {
    public static createUser(payload: createUserPayload){
        const {firstName, lastName, email, password} = payload;
        const salt = randomBytes(32).toString('hex');
        const hashedPassword = UserService.generateHash(password, salt);
        return prismaClient.user.create({
            data: {
                firstName,
                lastName : lastName || "",
                email,
                salt,
                password: hashedPassword,
                 
            }
        })
    }

    private static getUserByEmail(email: string){
        return prismaClient.user.findUnique({
            where: {
                email
            }
        })
    }

    private static generateHash(password: string, salt: string){    
        const hashedPassword = createHmac('sha256', salt).update(password).digest('hex');
        return hashedPassword;
    }

    public static async getUserToken(payload: getUserTokenPayload){
        const {email, password} = payload;
        const user = await UserService.getUserByEmail(email);
        if(!user) throw new Error("User not found");

        const userSalt = user.salt;
        const usersHashPass = UserService.generateHash(password, userSalt);
        if(usersHashPass !== user.password) throw new Error("Invalid password");
        
        const token = JWT.sign({id: user.id ,email: user.email}, JWT_SECRET, {expiresIn: '1h'});
        return token;
    }

    public static decodeJWT(token: string){
        return JWT.verify(token, JWT_SECRET);
    }

    public static async getUserById(id: string){
        return prismaClient.user.findUnique({
            where: {
                id
            }
        })
    }
}

export default UserService;