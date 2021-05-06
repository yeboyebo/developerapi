import express from 'express'
import projects from '../controllers/projectsCtrl'

const router = express.Router({ mergeParams: true })

router.get('/', (...[, res]) => {
  res.json(projects.list())
})

router.get('/:project', (req, res) => {
  res.json(projects.get(req.params.project))
})

router.patch('/:project', (req, res) => {
  res.json(projects.patch(req.body))
})

router.post('/', (req, res) => {
  res.json(projects.post(req.body.id))
})

export default router
