require("babel-polyfill");

import { Router } from 'express'
import * as bodyParser from 'body-parser'
import url from 'url'

const router = new Router();
router.use(bodyParser.json())

router.get('*', (req, res) => {
  return res.send([
    {
      id: 1,
      backdrop: `${__API_URL__}/static/mountain.jpg`,
      //thumbnail: `${__API_URL__}/static/beat-procrastination-thumb.jpg`,
      thumbnail: `${__API_URL__}/static/mountain_tn.jpg`,
      name: "Beat Procrastination - It Doesn't Have To Be Hard Work",
      rating: 4.5 / 5,
      numberOfReviews: 47,
      numberOfSteps: 7,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 45),
    },
    {
      id: 2,
      backdrop: `${__API_URL__}/static/ski-slope.jpg`,
      //thumbnail: `${__API_URL__}/static/find-your-purpose-thumb.jpg`,
      thumbnail: `${__API_URL__}/static/ski-slope_tn.jpg`,
      name: "Find Your Purpose - Forget About How, Find Your Why",
      rating: 4.1 / 5,
      numberOfReviews: 12,
      numberOfSteps: 5,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 40),
    },
    {
      id: 3,
      backdrop: `${__API_URL__}/static/business-cash-coin-concept-41301.jpeg`,
      //thumbnail: `${__API_URL__}/static/sales-101-thumb.jpg`,
      thumbnail: `${__API_URL__}/static/business-cash-coin-concept-41301_tn.jpg`,
      name: "Sales 101 - How To Put Your Best Foot Forward", 
      rating: 3.7 / 5,
      numberOfReviews: 3,
      numberOfSteps: 7,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 5),
    }, 
    /*{
      id: 4,
      backdrop: `${__API_URL__}/static/suit-portrait-preparation-wedding.jpg`,
      thumbnail: `${__API_URL__}/static/suit-portrait-preparation-wedding_tn.jpg`,
      name: "Self-Confidence",
      rating: 4.2 / 5,
      numberOfReviews: 145,
      numberOfSteps: 3,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 85),
    },
    {
      id: 5,
      backdrop: `${__API_URL__}/static/business-plan.jpg`,
      thumbnail: `${__API_URL__}/static/business-plan_tn.jpg`,
      name: "Designing A Business Plan",
      rating: 3.6 / 5,
      numberOfReviews: 77,
      numberOfSteps: 5,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 65),
    },
    {
      id: 6,
      backdrop: `${__API_URL__}/static/coffee-cup-mug-desk.jpg`,
      thumbnail: `${__API_URL__}/static/coffee-cup-mug-desk_tn.jpg`,
      name: "Organisation With Evernote",
      rating: 4.1 / 5,
      numberOfReviews: 10,
      numberOfSteps: 3,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 155),
    },
    {
      id: 7,
      backdrop: `${__API_URL__}/static/startup-photos.jpg`,
      thumbnail: `${__API_URL__}/static/startup-photos_tn.jpg`,
      name: "Create a Vision Board",
      rating: 3.9 / 5,
      numberOfReviews: 13,
      numberOfSteps: 5,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 77),
    },
    {
      id: 8,
      backdrop: `${__API_URL__}/static/eat-food-vitamins-vegetables-53517.jpeg`,
      thumbnail: `${__API_URL__}/static/eat-food-vitamins-vegetables-53517_tn.jpg`,
      name: "Cooking A Week’s Worth Of Food",
      rating: 4.5 / 5,
      numberOfReviews: 210,
      numberOfSteps: 5,
      minutesPerStep: 10,
      date: new Date((new Date).valueOf() - 888),
    }, 
    {
      id: 9,
      backdrop: `${__API_URL__}/static/people-coffee-tea-meeting.jpg`,
      thumbnail: `${__API_URL__}/static/people-coffee-tea-meeting_tn.jpg`,
      name: "Social Confidence",
      rating: 4.2 / 5,
      numberOfReviews: 142,
      numberOfSteps: 5,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 35),
    },*/
    /*{
      id: 10,
      backdrop: `${__API_URL__}/static/pen-writing-notes-studying.jpg`,
      thumbnail: `${__API_URL__}/static/pen-writing-notes-studying_tn.jpg`,
      name: "Persuasive Writing",
      rating: 4 / 5,
      numberOfReviews: 22,
      numberOfSteps: 5,
      minutesPerStep: 5,
      date: new Date((new Date).valueOf() - 15),
    },*/
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
  ])
})

export default router