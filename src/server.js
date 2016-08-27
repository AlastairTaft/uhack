require("babel-polyfill")
Error.stackTraceLimit = 25
import express from 'express'
import path from 'path'
import { fetchNeeds, AsyncRouterContext } from 'redux-async-props'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index.js'
import routes from './modules/routes.js'
import fs from 'fs'
import { Presets, StyleSheet, LookRoot } from 'react-look'
import coursesRouter from './api/courses.js'
import courseRouter from './api/course.js'
import mentorRouter from './api/mentor.js'
import lessonsRouter from './api/lessons.js'
import callAPIMiddleware from './callAPIMiddleware.js'
import thunkMiddleware from 'redux-thunk'

const templateHtml = fs.readFileSync(path.resolve(__dirname, 'public', 'index.html'), 'utf8')
const serverConfig = Presets['react-dom']
const PORT = process.env.PORT || 5000

var server = express()

server.get('*', function(req, res, next) {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      return res.redirect(302, redirect.pathname + redirect.search)
    } else if (!props) {
      return next()
    }
    
    serverConfig.userAgent = req.headers['user-agent']
    serverConfig.styleElementId = '_look'

    //const store = createStore(reducer)
    const store = applyMiddleware(
      thunkMiddleware,
      callAPIMiddleware,
    )(createStore)(
      reducer, 
      {},
    )
    fetchNeeds(props, store)
    .then((asyncProps) => {
      var appHtml = ''
      // Only server side render the stuff when not in dev mode, this 
      // avoids us having to restart the server every time there's a change
      if (process.env.NODE_ENV == 'production')
        appHtml = renderToString(
          <Provider store={store}>
            <LookRoot config={serverConfig}>
              <AsyncRouterContext {...props} asyncProps={asyncProps} />
            </LookRoot>
          </Provider>
        )
      var html = templateHtml
      html = html.replace('<!--__APP_HTML__-->', appHtml)
      var appCSS = ''
      if (process.env.NODE_ENV == 'production')
        appCSS = StyleSheet.renderToString(serverConfig.prefixer)
      html = html.replace('<!-- {{css}} -->', appCSS)
      const initialState = {asyncProps, store: store.getState()}
      html = html.replace('{/*__INITIAL_STATE__*/}', JSON.stringify(initialState))
      res.send(html)
    })
    .catch(next)
  })
})

console.log(`path: ${path.resolve(__dirname, '..', 'public')}`)
server.use('/static', express.static(path.resolve(__dirname, '..', 'public')))

server.use('/api/courses', coursesRouter)
server.use('/api/course', courseRouter)
server.use('/api/mentor', mentorRouter)
server.use('/api/lessons', lessonsRouter)

server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))
