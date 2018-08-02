'use strict'

const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/register','UserController.registerGet')
Route.post('/register','UserController.registerPost')

Route.get('/login','UserController.loginGet')
Route.post('/login','UserController.loginPost')
// .middleware(['auth'])
Route.get('/profile','UserController.profileGet').middleware(['authenticated'])
Route.put('/profile','UserController.profilePut').middleware(['authenticated'])



 
 