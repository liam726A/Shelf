import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Window extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public category: number

  @column()
  public title: string

  @column()
  public text: string

  @column()
  public url: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
