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

router.post('/', (req, res) => {
  res.json(extensions.post(req.body.id))
})

router.post('/-static-/create_view', (req, res) => {
  res.json(extensions.createView(req.body.ext, req.body.id))
})

router.post('/-static-/create_subview', (req, res) => {
  res.json(extensions.createSubview(req.body.ext, req.body.id))
})

export default router
