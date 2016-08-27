require("babel-polyfill");

import { Router } from 'express'
import * as bodyParser from 'body-parser'
import url from 'url'

const router = new Router();
router.use(bodyParser.json())

router.get('*', async (req, res, next) => {
  res.send([
    {
      name: "Beat Procrastination",
    },
    {
      name: "Find Your Purpose"
    },
    {
      name: "Designing A Business Plan",
    },
    {
      name: "Organisation With Evernote",
    },
    {
      name: "Create a Vision Board",
    },
    {
      name: "Cooking A Week’s Worth Of Food",
    },
    {
      name: "Basic Sales", 
    },  
    {
      name: "Self-Confidence",
    },
    {
      name: "Social Confidence",
    },
    {
      name: "Persuasive Writing",
    }
  ])
})

export default router