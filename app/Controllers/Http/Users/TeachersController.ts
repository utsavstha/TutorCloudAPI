// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TeacherDatum from 'App/Models/TeacherDatum'
import {schema, rules} from '@ioc:Adonis/Core/Validator'

export default class TeachersController {
    public async index(){
        return TeacherDatum.all()
    }

    public async show({params}: HttpContextContract){
        return TeacherDatum.query().where('user_id', params.id);
    }

    public async store({request, response} : HttpContextContract){
        const newSchema = schema.create({
            education: schema.string({trim: true}),
            certification: schema.string({trim: true}),
            subject: schema.string({trim: true}),
            rate: schema.number(),
            rating: schema.number(),
            age: schema.number(),
            userId: schema.number()
        })
        const payload = await request.validate({schema: newSchema})
        const item = await TeacherDatum.create(payload)
        response.status(200)
        return item
    }
}
