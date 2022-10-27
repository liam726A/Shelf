import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Window from 'App/Models/Window'

export default class WindowsController {
    public async window(ctx: HttpContextContract){
        const window = await Window.all()
        const data = {
            title: 'drawers',
            message: 'project-show-window for liam.',
            data: window
        }
        return ctx.view.render('window/index', data)
    }
    public async add(ctx: HttpContextContract) {
        const data = {
            title: 'Add',
            message: 'Add to drawers.'
        }
        return ctx.view.render('window/add', data)
    }
    public async add_posted(ctx: HttpContextContract) {
        await Window.create(ctx.request.body())
        return ctx.response.redirect('/drawers')
    }
    public async edit(ctx: HttpContextContract) {
        const id = ctx.request.param('id')
        const window = await Window.find(id)
        const data = {
            title: 'Edit',
            message: 'id= ' + id + 'の編集',
            window: window
        }
        return ctx.view.render('window/edit', data)
    }
    public async edit_posted(ctx: HttpContextContract) {
        const id = ctx.request.param('id')
        const window = await Window.find(id)
        await window?.merge(ctx.request.body()).save()
        return ctx.response.redirect('/drawers')
    }

    public async calc(ctx: HttpContextContract) {
        var list = []
        ctx.session.put('list', list)
        const data = {
            title: 'Calculator',
            message: 'list up the numbers',
            list: list
        }
        return ctx.view.render('window/calculator', data)
    }
    public async calc_posted(ctx: HttpContextContract) {
        const list = ctx.session.get('list')
        if (ctx.request.input('number1') != null){
            list.push(ctx.request.input('number1'))
        }
        if (ctx.request.input('number2') != null){
            list.push(ctx.request.input('number2'))
        }
        if (ctx.request.input('number3') != null){
            list.push(ctx.request.input('number3'))
        }
        if (ctx.request.input('number4') != null){
            list.push(ctx.request.input('number4'))
        }
        if (ctx.request.input('number5') != null){
            list.push(ctx.request.input('number5'))
        }
        if (ctx.request.input('number6') != null){
            list.push(ctx.request.input('number6'))
        }
        if (ctx.request.input('number7') != null){
            list.push(ctx.request.input('number7'))
        }
        if (ctx.request.input('number8') != null){
            list.push(ctx.request.input('number8'))
        }
        if (ctx.request.input('number9') != null){
            list.push(ctx.request.input('number9'))
        }
        if (ctx.request.input('number10') != null){
            list.push(ctx.request.input('number10'))
        }
        if (ctx.request.input('number11') != null){
            list.push(ctx.request.input('number11'))
        }
        if (ctx.request.input('number12') != null){
            list.push(ctx.request.input('number12'))
        }
        ctx.session.put('list', list)
        const data = {
            title: 'Calculator',
            message: 'submit',
            list: list,
        }
        return ctx.view.render('window/calculator', data)
    }
}
