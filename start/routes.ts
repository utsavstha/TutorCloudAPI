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
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'




Route.group(() => {
  Route.resource('teacher_data', 'Users/TeachersController').apiOnly;
  Route.resource('dashboard', 'DashboardController').apiOnly;
  Route.resource('conversation', 'ConversationsController').apiOnly;
  Route.resource('chatMessage', 'ChatsController').apiOnly;

  Route.get('conversationTeacher/:id', 'ConversationsController.show_conversation_teachers');
  Route.get('conversationStudent/:id', 'ConversationsController.show_conversation_students');
  Route.post('share_roomid', 'ChatsController.share_roomid');

  Route.post('register', 'Users/AuthController.register').as('register')
  Route.post('login', 'Users/AuthController.login').as('login')
  Route.post('logout', 'Users/AuthController.logout').as('logout')
  Route.post('sendResetCode', 'Users/AuthController.sendResetCode')
  Route.post('resetCode', 'Users/AuthController.resetCode')
  Route.post('/reset-password/:email', 'Users/AuthController.resetPassword').as('reset.password')
})
