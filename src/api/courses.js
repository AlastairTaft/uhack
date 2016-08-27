require("babel-polyfill");

import { Router } from 'express'
import * as bodyParser from 'body-parser'
import url from 'url'

const router = new Router();
router.use(bodyParser.json())

router.get('*', async (req, res, next) => {
  res.send([
    {
      name: "Beat Procrastination - It Doesn't Have To Be Hard Work",
      thumbnail: `${__API_URL__}/static/beat-procrastination-thumb.jpg`,
    },
    {
      name: "Find Your Purpose - Forget About How, Find Your Why",
      thumbnail: `${__API_URL__}/static/find-your-purpose-thumb.jpg`,
    },
    {
      name: "Sales 101 - How To Put Your Best Foot Forward", 
      thumbnail: `${__API_URL__}/static/sales-101-thumb.jpg`,
    }, 
    {
      name: "Self-Confidence",
      thumbnail: `${__API_URL__}/static/self-confidence-thumb.jpg`,
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
      name: "Social Confidence",
    },
    {
      name: "Persuasive Writing",
    }
  ])
})

export default router