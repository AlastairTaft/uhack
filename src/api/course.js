require("babel-polyfill");

import { Router } from 'express'

import url from 'url'

const router = new Router();


const courses = {
  11: {
    id: 11,
    backdrop: `${__API_URL__}/static/red-phone.jpg`,
    thumbnail: `${__API_URL__}/static/red-phone_tn.jpg`,
    name: "The Keys To Cold Calling",
    rating: 4.5 / 5,
    numberOfReviews: 47,
    numberOfSteps: 7,
    minutesPerStep: 5,
    // Price in pennies
    price: 1000,
    description: `<p>How do you feel about selling?</p>
      
      <p>This micro-course takes the stress out of sales, by showing you how to work together with a client to achieve a desired result</p>
      
      <p>The result is a win for your clients, and a greater level of satisfaction for you. With practice, this micro-skill will carry into many other areas of life, and give you a greater sense of confidence - no matter the situation!</p>
      
      <p>“I didn’t think I could ever overcome a fear of cold-calling, but after 3 calls I got my very first sale. Thanks for the course!”</p>`,
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