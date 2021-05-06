import express from 'express'
import extensions from '../controllers/extensionsCtrl'
// import viewsRouter from './viewsRouter'

const router = express.Router({ mergeParams: true })

router.get('/', (...[, res]) => {
  res.json(extensions.list())
})

router.get('/:extension', (req, res) => {
  res.json(extensions.get(req.params.extension))
})

router.patch('/:extension', (req, res) => {
  res.json(extensions.patch(req.body))
})

router.post('/', (req, res) => {
  res.json(extensions.post(req.body.id))
})

// router.use('/:extension/views', viewsRouter)

router.post('/-static-/create_view', (req, res) => {
  res.json(extensions.createView(req.body.ext, req.body.id))
})

router.post('/-static-/create_subview', (req, res) => {
  res.json(extensions.createSubview(req.body.ext, req.body.id))
})

export default router
