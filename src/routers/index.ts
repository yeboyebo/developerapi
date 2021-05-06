import express from 'express'
import projectsRouter from './projectsRouter'
import extensionsRouter from './extensionsRouter'

const router = express.Router({ mergeParams: true })

router.use('/dev_projects', projectsRouter)
router.use('/dev_extensions', extensionsRouter)

export default router
