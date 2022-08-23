// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Database from '@ioc:Adonis/Lucid/Database'

export default class DashboardController {
    public async index(){
        let data = await Database.rawQuery('select * from users join teacher_data on teacher_data.user_id = users.id WHERE role = "teacher"')
        if (data.length > 0){
          return data[0]
        } else{
          return data
        }
      }
}
