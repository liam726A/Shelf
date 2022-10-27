import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Drawers extends BaseSchema {
  protected tableName = 'drawers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('category')
      table.string('title')
      table.string('text')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
