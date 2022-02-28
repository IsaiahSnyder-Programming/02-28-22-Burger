import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Burgers = [
    {
      id: 1, 
      name: 'Cheeez Borgir',
      toppings: 'Cheeez'
    },
    {
      id: 2, 
      name: 'Dubl Dekr',
      toppings: 'Borgir'
    }
  ]
}

export const dbContext = new DbContext()
