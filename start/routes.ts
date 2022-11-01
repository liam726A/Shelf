/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  const data = {
    title: 'yourShelf',
    message: 'a shelf for you.'
  }
  return view.render('welcome', data)
})

Route.get('/yourshelf', async ({ view }) => {
  const data = {
    title: 'yourShelf',
    message: 'a shelf for you.'
  }
  return view.render('drawer/yourshelf', data)
})

Route.get('/yourshelf/bookmark', 'DrawersController.bookmark')
Route.get('/yourshelf/memo', 'DrawersController.memo')
Route.get('/yourshelf/address', 'DrawersController.address')
Route.get('/yourshelf/add', 'DrawersController.add')
Route.post('/yourshelf/add', 'DrawersController.add_posted')
Route.get('/yourshelf/:id', 'DrawersController.edit')
Route.post('/yourshelf/:id', 'DrawersController.edit_posted')
Route.get('/yourshelf/del/:id', 'DrawersController.delete')
Route.post('/yourshelf/del/:id', 'DrawersController.delete_posted')

Route.get('/drawers', 'WindowsController.window')
Route.get('/drawers/add', 'WindowsController.add')
Route.post('/drawers/add', 'WindowsController.add_posted')
Route.get('/drawers/:id', 'WindowsController.edit')
Route.post('/drawers/:id', 'WindowsController.edit_posted')

Route.get('/calc', 'WindowsController.calc')
Route.post('/calc', 'WindowsController.calc_posted')