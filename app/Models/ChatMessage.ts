import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ChatMessage extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public user_one: number;
  
  @column()
  public conversation_id: number;

  @column()
  public user_two: number;

  @column()
  public user_one_name: string;

  @column()
  public user_two_name: string;

  @column()
  public message: string;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
