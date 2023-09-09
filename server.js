import { fastify } from 'fastify'
import { DatabaseMemody } from './database-memory.js'

const server = fastify()
const database = new DatabaseMemody()

server.get('/', () => {
  return 'Hello World'
})

server.post('/videos', (request, reply) => {
  database.create({
    title: 'Video 01',
    description: 'Esse é o video 01',
    duration: 180
  })

  console.log(database.list())

  return reply.status(201).send()
})

server.get('/videos', () => {
  return 'Hello World'
})

server.put('/videos/:id', () => {
  return 'Hello World'
})

server.delete('/videos/:id', () => {
  return 'Hello World'
})

server.listen({
  port: 3333,
})