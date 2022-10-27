import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Drawer from 'App/Models/Drawer'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Drawer.createMany([
      {
        category: 1,
        title: 'a Shelf',
        text: 'https://www.shelf.com',
      },
      {
        category: 2,
        title: 'Memos',
        text: 'Taking memo is important.',
      },
      {
        category: 3,
        title: 'Address',
        text: 'github: @liam726A, twitter: @pm2isnaptime, mail: am2ismidnight@gmail.com',
      },
    ])
  }
}
