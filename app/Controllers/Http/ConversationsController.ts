import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Database from '@ioc:Adonis/Lucid/Database'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import Conversation from 'App/Models/Conversation'

export default class ConversationsController {
    public async index(){
        let data = await Database.rawQuery('select * from users join teacher_data on teacher_data.user_id = users.id WHERE role = "teacher"')
        if (data.length > 0){
          return data[0]
        } else{
          return data
        }
    }
    public async store({request, response} : HttpContextContract){
        const newSchema = schema.create({
            teacher_id: schema.number(),
            student_id: schema.number(),
        })
        const payload = await request.validate({schema: newSchema})
        const item = await Conversation.create(payload)
        response.status(200)
        return item
    }

    public async destroy({params}: HttpContextContract){
        const menu = await Conversation.findOrFail(params.id)
        return menu.delete()
    }

    public async show_conversation_teachers({params}: HttpContextContract){
        let data = await Database.rawQuery('select conversations.id, users.first_name, users.last_name, users.avatar_url, users.email, users.id as user_id, conversations.teacher_id, conversations.student_id from conversations join users on users.id = conversations.student_id WHERE conversations.teacher_id = ' + params.id)
        if (data.length > 0){
          return data[0]
        } else{
          return data
        }
    }

    public async show_conversation_students({params}: HttpContextContract){
        let data = await Database.rawQuery('select conversations.id, users.first_name, users.last_name, users.avatar_url, users.email, users.id as user_id, conversations.teacher_id, conversations.student_id  from conversations join users on users.id = conversations.teacher_id WHERE conversations.student_id = ' + params.id)
        if (data.length > 0){
          return data[0]
        } else{
          return data
        }
    }
}
