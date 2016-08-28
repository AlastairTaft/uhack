require("babel-polyfill");

import { Router } from 'express'
import * as bodyParser from 'body-parser'
import url from 'url'

const router = new Router();
router.use(bodyParser.json())

router.get('*', (req, res) => {
  return res.send([
    {
      id: 2,
      backdrop: `${__API_URL__}/static/ski-slope.jpg`,
      thumbnail: `${__API_URL__}/static/ski-slope_tn.jpg`,
      name: "Finding your passions",
      rating: 4.1 / 5,
      numberOfReviews: 12,
      numberOfSteps: 5,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 40),
    },
    {
      id: 3,
      backdrop: `${__API_URL__}/static/business-cash-coin-concept-41301.jpeg`,
      thumbnail: `${__API_URL__}/static/business-cash-coin-concept-41301_tn.jpg`,
      name: "How to approach the right business mentor", 
      rating: 3.7 / 5,
      numberOfReviews: 3,
      numberOfSteps: 7,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 5),
    }, 
    {
      id: 7,
      backdrop: `${__API_URL__}/static/startup-photos.jpg`,
      thumbnail: `${__API_URL__}/static/startup-photos_tn.jpg`,
      name: "How to create a Vision Board",
      rating: 3.9 / 5,
      numberOfReviews: 13,
      numberOfSteps: 5,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 77),
    },
    {
      id: 10,
      backdrop: `${__API_URL__}/static/pen-writing-notes-studying.jpg`,
      thumbnail: `${__API_URL__}/static/pen-writing-notes-studying_tn.jpg`,
      name: "How to write a persuasive email ",
      rating: 4 / 5,
      numberOfReviews: 22,
      numberOfSteps: 7,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 15),
    },
    {
      id: 11,
      backdrop: `${__API_URL__}/static/red-phone.jpg`,
      thumbnail: `${__API_URL__}/static/red-phone_tn.jpg`,
      name: "The keys to cold calling",
      rating: 4 / 5,
      numberOfReviews: 22,
      numberOfSteps: 5,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 15),
    },
    {
      id: 1,
      backdrop: `${__API_URL__}/static/mountain.jpg`,
      thumbnail: `${__API_URL__}/static/mountain_tn.jpg`,
      name: "How to get more done in less time",
      rating: 4.5 / 5,
      numberOfReviews: 47,
      numberOfSteps: 6,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 45),
    },
  ])
})

export default router