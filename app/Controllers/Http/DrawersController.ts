import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Drawer from 'App/Models/Drawer'

export default class DrawersController {
    public async bookmark(ctx: HttpContextContract){
        var bookmark = await Drawer.query()
            .where('category', '=', 1)
            .exec()
        const data = {
            title: 'Bookmarks',
            message: 'the list of bookmarks',
            data: bookmark
        }
        return ctx.view.render('drawer/bookmark', data)
    }
    public async memo(ctx: HttpContextContract){
        var memo = await Drawer.query()
            .where('category', '=', 2)
            .exec()
        const data = {
            title: 'Memos',
            message: 'the list of memos',
            data: memo
        }
        return ctx.view.render('drawer/memo', data)
    }
    public async address(ctx: HttpContextContract){
        var address = await Drawer.query()
            .where('category', '=', 3)
            .orderBy('title', 'asc')
            .exec()
        const data = {
            title: 'Address',
            message: 'the list of addresses',
            data: address
        }
        return ctx.view.render('drawer/address', data)
    }

    public async add(ctx: HttpContextContract) {
        const data = {
            title: 'Add',
            message: 'Add to yourshelf.'
        }
        return ctx.view.render('drawer/add', data)
    }
    public async add_posted(ctx: HttpContextContract) {
        await Drawer.create(ctx.request.body())
        return ctx.response.redirect('/yourshelf')
    }

    public async edit(ctx: HttpContextContract) {
        const id = ctx.request.param('id')
        const drawer = await Drawer.find(id)
        const data = {
            title: 'Edit',
            message: 'id= ' + id + 'の編集',
            drawer: drawer
        }
        return ctx.view.render('drawer/edit', data)
    }
    public async edit_posted(ctx: HttpContextContract) {
        const id = ctx.request.param('id')
        const drawer = await Drawer.find(id)
        await drawer?.merge(ctx.request.body()).save()
        return ctx.response.redirect('/yourshelf')
    }

    public async delete(ctx: HttpContextContract) {
        const id = ctx.request.param('id')
        const drawer = await Drawer.find(id)
        const data = {
            title: 'Delete',
            message: 'id= ' + id + 'の削除',
            drawer: drawer
        }
        return ctx.view.render('drawer/delete', data)
    }
    public async delete_posted(ctx: HttpContextContract) {
        const id = ctx.request.param('id')
        const drawer = await Drawer.find(id)
        await drawer?.delete()
        return ctx.response.redirect('/yourshelf')
    }
}
