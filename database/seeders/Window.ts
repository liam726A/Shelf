import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Window from 'App/Models/Window'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Window.createMany([
      {
        category: 1,
        title: 'yourShelf',
        text: 'a shelf for you.',
        url: 'https://www.shelf.com/'
      },
      {
        category: 2,
        title: 'project_name',
        text: 'project_explain',
        url: 'https://www.project.com/'
      }
    ])
  }
}
