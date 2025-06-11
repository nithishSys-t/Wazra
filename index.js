import express from 'express'
import payload from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'
import { handler } from './server/getContactSubmitCountHandler.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())

payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    mongoURL: process.env.DATABASE_URI || '',
    express: app,
    configPath: path.resolve(__dirname, 'payload.config.js'),
    onInit: () => {
        console.log('Payload Admin available at http://localhost:4000/admin')
    },
})

app.get('/api/analytics', handler)

app.listen(4000, () => {
    console.log('Server started on http://localhost:4000')
})
