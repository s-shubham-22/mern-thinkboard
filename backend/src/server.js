import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import router from './routes/index.js'
import { connectDB } from './config/db.js'
import rateLimiter from './middleware/rateLimiter.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors({
  origin: 'http://localhost:5173',
}))
app.use(express.json())
app.use(rateLimiter)

app.use('/api', router)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on port:', PORT)
  })
}).catch((error) => {
  console.error('Database connection error:', error)
})
