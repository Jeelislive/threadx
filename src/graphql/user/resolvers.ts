import { get } from "http";
import UserService, { createUserPayload } from "../../services/user"

const queries = {
    getUserToken : async (_:any, payload:{email: string, password: string}) => {
        const token = await UserService.getUserToken({
            email: payload.email,
            password: payload.password
        });
        return token;
    },

    getCurrentLoggedInUser : async (_:any, __:any, context:any) => {
            if(context && context.user) {
                const id = context.user.id;
                const user = await UserService.getUserById(id);
                return user; 
            }
            else return null;
    }
}

const mutations = {
    createUser : async (_:any, payload:createUserPayload) => {
        const response = await UserService.createUser(payload);
        return response.id;
    }
}

export const resolvers = {
    queries,
    mutations
}