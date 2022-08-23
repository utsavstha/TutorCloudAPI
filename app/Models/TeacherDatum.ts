import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TeacherDatum extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public education: string;

  @column()
  public subject: string;

  @column()
  public certification: string;

  @column()
  public rate: number;

  @column()
  public rating: number;

  @column()
  public age: number;

  @column()
  public userId: number;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
