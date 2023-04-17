import  { UsersCollection } from "../configs/db.config"
import { User } from "../models/user"


export default class UserService {

    async newUser(user) {
        return await UsersCollection.add({ user });
    }

    async getUser(userId) {
        const snapshot = await UsersCollection.get();
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const user = list.find((user) => user.id === userId);
        return user;
    }

    async updateUser(userId, data){
        // just make sure to delete the user id before sending it here
        await UsersCollection.doc(userId).update(data);
    }

    async deleteUser(userId) {
        return this.repository().createQueryBuilder().delete().from(UsersCollection).where("id = :id", { userId })
    }
}