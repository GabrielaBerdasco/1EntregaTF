import express from 'express'
import { Router } from 'express'


const routerCart = Router()

routerCart.use(express.json())
routerCart.use(express.urlencoded({ extended: true }))

routerCart.post('/', async (req, res) => {
})

routerCart.delete('/:id', async(req, res) => {
})

routerCart.get('/:id/products', async (req, res) => {
})

routerCart.post('/:id/products', async (req, res) => {
})

routerCart.delete('/:id/products/:idProduct', async (req, res) => {
})



export default routerCart