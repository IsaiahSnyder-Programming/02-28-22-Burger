import { dbContext } from "../db/DbContext"

class BurgersService {

    async getAllBurgers() {
        const burgers = await dbContext.Burgers
        return burgers
    }

    async createBurger(body) {
        const burger = await dbContext.Burgers.push(body)
        return body
    }

    async removeBurger(burgerId) {
        const index = dbContext.Burgers.findIndex(b => b.id.toString() === burgerId)
        if(index === -1) {
            throw new Error('no borgir')
        }
        dbContext.Burgers.splice(index, 1)
        return 'masht'
    }
}

export const burgersService = new BurgersService()