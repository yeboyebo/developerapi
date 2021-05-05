import express from 'express'
import projects from './projectsRouter'
import extensions from './extensionsRouter'

const router = express.Router()

router.use('/dev_projects', projects)
router.use('/dev_extensions', extensions)

export default router
