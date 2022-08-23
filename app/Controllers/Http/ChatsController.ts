import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import ChatMessage from 'App/Models/ChatMessage'
import Ws from 'App/Services/Ws'
export default class ChatsController {
    public async store({request, response} : HttpContextContract){
        const newSchema = schema.create({
            user_one: schema.number(),
            user_two: schema.number(),
            user_one_name: schema.string(),
            user_two_name: schema.string(),
            message: schema.string(),
            conversation_id: schema.number()
        })
        const payload = await request.validate({schema: newSchema})
        const item = await ChatMessage.create(payload)
        response.status(200)
        Ws.io.emit(item.conversation_id.toString(), item)

        return item
    }

    public async show({params}: HttpContextContract){
        return ChatMessage.query().where('conversation_id', params.id).orderBy('id', 'desc')
    }

    public async share_roomid({request, response}: HttpContextContract){
        let body = request.body()
        let roomId = body.roomId;
        let conversationId = body.conversationId;
        console.log("call_"+conversationId);
        
        Ws.io.emit("call_"+conversationId, roomId);

        return response.status(200)
    }
}
