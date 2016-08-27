require("babel-polyfill");

import { Router } from 'express'

import url from 'url'

const router = new Router();


const courses = {
  1: {
    id: 1,
    backdrop: `${__API_URL__}/static/mountain.jpg`,
    //thumbnail: `${__API_URL__}/static/beat-procrastination-thumb.jpg`,
    thumbnail: `${__API_URL__}/static/mountain_tn.jpg`,
    name: "The Keys To Cold Calling",
    rating: 4.5 / 5,
    numberOfReviews: 47,
    numberOfSteps: 7,
    minutesPerStep: 5,
    // Price in pennies
    price: 1000,
    description: "adasdadasd",
    courseOutline: {
      lesson1: 'The importance of tonality',
      lesson2: 'Knowing your outcome',
      lesson3: 'The opening line',
      lesson4: 'Building rapport',
      lesson5: 'Collaborative closing',
      lesson6: 'Dealing with rejection',
      lesson7: 'The call to action',
    },
    mentor: 1,
  }
}

router.get('/:id', (req, res) => {
  var id = req.params.id

  var course = courses[id]
  if (!course){
    return res.status(404).send({
      message: 'Course not found.'
    })
  }
  return res.send(course)
})

export default router