const fastify = require('fastify')()

fastify.register(require('@fastify/cors'), (instance) => {
    return (req, callback) => {
      const corsOptions = {
        origin: true
      };
  
      if (/^localhost$/m.test(req.headers.origin)) {
        corsOptions.origin = false
      }
  
      callback(null, corsOptions)
    }
  })

fastify.register(require('@fastify/mysql'), {
  connectionString: 'mysql://root@localhost/crud'
})

  fastify.get('/user', (req, reply) => {
    fastify.mysql.getConnection(onConnect)
  
    function onConnect (err, client) {
      if (err) return reply.send(err)
  
      client.query(
        'SELECT id, f_name, s_name, class, number FROM user',
        function onResult (err, result) {
          client.release()
          reply.send(err || result)
        }
      )
    }
  })

  fastify.get('/user/:id', (req, reply) => {
    fastify.mysql.query(
      'SELECT id, f_name, s_name, class, number FROM user WHERE id=?', 
      [req.params.id],
      function onResult (err, result) {
        reply.send(err || result)
      }
    )
  })

  fastify.delete('/user/delete/:id', (req, reply) => {
    fastify.mysql.query(
      'DELETE FROM user WHERE id = ?', 
      [req.params.id],
      function onResult (err, result) {
        reply.send(err || result)
      }
    )
  })
 
  fastify.put('/user/edit/:id', (req, reply) => {
    fastify.mysql.query(
      'UPDATE `user` SET `f_name`= ?, `s_name`= ?, `class`= ?, `number`= ? WHERE id = ?', 
      [req.body.f_name, req.body.s_name, req.body.class, req.body.number, req.body.id],
      function onResult (err, result) {
        reply.send(err || result)
      }
    )
  })

  fastify.post('/user/create', function(req, reply) {
    fastify.mysql.query(
      'INSERT INTO user (f_name, s_name, class, number) VALUES (?,?,?,?)',
      [req.body.f_name, req.body.s_name, req.body.class, req.body.number],
      function onResult (err, result) {
        reply.send(err || result)
      }
    )
  })

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
  console.log(`server running on ${fastify.server.address().port}`)
})