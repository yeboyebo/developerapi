import express from 'express'
import projects from '../controllers/projectsCtrl'

const router = express.Router()

router.get('/', (...[, res]) => {
  res.json(projects.list())
})

router.get('/:name', (req, res) => {
  res.json(projects.get(req.params.name))
})

router.patch('/:name', (req, res) => {
  res.json(projects.patch(req.body))
})

router.post('/', (req, res) => {
  res.json(projects.post(req.body.id))
})

export default router
