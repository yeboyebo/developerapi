import express from 'express'
import extensions from '../controllers/extensionsCtrl'

const router = express.Router()

router.get('/', (...[, res]) => {
  res.json(extensions.list())
})

router.get('/:name', (req, res) => {
  res.json(extensions.get(req.params.name))
})

router.patch('/:name', (req, res) => {
  res.json(extensions.patch(req.body))
})

export default router
