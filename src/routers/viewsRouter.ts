import express from 'express'
import views from '../controllers/viewsCtrl'

const router = express.Router({ mergeParams: true })

router.get('/', (req, res) => {
  res.json(views.list(req.params.extension))
})

// router.get('/:view', (req, res) => {
//   res.json(views.get(req.params.name, req.params.view))
// })

// router.patch('/:view', (req, res) => {
//   res.json(views.patch(req.body))
// })

router.post('/', (req, res) => {
  res.json(views.post(req.params.extension, req.body.id))
})

export default router
