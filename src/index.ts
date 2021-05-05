import express from 'express'
import cors from 'cors'
import router from './routes'
import config from './config'

const app = express()

app.use(cors())
app.use(express.json())

app.use(config.baseUrl, router)

app.listen(config.port, () => console.log(`Server listening at port ${config.port}`))
