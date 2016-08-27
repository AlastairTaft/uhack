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
      rating: 4.5,
    },
    {
      name: "Find Your Purpose - Forget About How, Find Your Why",
      thumbnail: `${__API_URL__}/static/find-your-purpose-thumb.jpg`,
      rating: 4.1,
    },
    {
      name: "Sales 101 - How To Put Your Best Foot Forward", 
      thumbnail: `${__API_URL__}/static/sales-101-thumb.jpg`,
      rating: 3.7,
    }, 
    {
      name: "Self-Confidence",
      thumbnail: `${__API_URL__}/static/self-confidence-thumb.jpg`,
      rating: 4.2,
    },
    {
      name: "Designing A Business Plan",
      rating: 3.6,
    },
    {
      name: "Organisation With Evernote",
      rating: 4.1,
    },
    {
      name: "Create a Vision Board",
      rating: 3.9,
    },
    {
      name: "Cooking A Week’s Worth Of Food",
      rating: 4.5,
    }, 
    {
      name: "Social Confidence",
      rating: 4.2,
    },
    {
      name: "Persuasive Writing",
      rating: 4,
    }
  ])
})

export default router