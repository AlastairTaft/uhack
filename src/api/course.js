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
    price: 0,
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
  },
  7: {
    id: 7,
    backdrop: `${__API_URL__}/static/startup-photos.jpg`,
    thumbnail: `${__API_URL__}/static/startup-photos_tn.jpg`,
    name: "How to create a Vision Board",
    rating: 3.9 / 5,
    numberOfReviews: 13,
    numberOfSteps: 5,
    minutesPerStep: 5,
    date: new Date((new Date).valueOf() - 77),
    // Price in pennies
    price: 0,
    description: `<p>Issue - Do you know what you want?</p>

      <p>Solution - This micro-course shows you how to take your dreams and put them onto paper, giving you a visual representation of the life you want to live. </p>

      <p>Benefit - The result is a feeling of clarity and confidence which leads to greater action and more results.</p>

      <p>Proof -  </p>

      <p>Testimonial… </p>

      <p>Link to a Study:</p> 
      <p><a href="http://www.forbes.com/sites/ellevate/2014/04/08/why-you-should-be-writing-down-your-goals/" target="_blank">http://www.forbes.com/sites/ellevate/2014/04/08/why-you-should-be-writing-down-your-goals/</a></p>

      <p>Next Course: How to create a VISION MAP</p>
    `,
    courseOutline: {
      lesson1: 'Discover what you want',
      lesson2: 'Find your inspiration',
      lesson3: 'Find your method of creation',
      lesson4: 'Write your goals',
      lesson5: 'Print/Post your content',
    },
    mentor: 1,
  },
  2: {
    id: 2,
    backdrop: `${__API_URL__}/static/ski-slope.jpg`,
    //thumbnail: `${__API_URL__}/static/find-your-purpose-thumb.jpg`,
    thumbnail: `${__API_URL__}/static/ski-slope_tn.jpg`,
    name: "Finding your passions",
    rating: 4.1 / 5,
    numberOfReviews: 12,
    numberOfSteps: 5,
    minutesPerStep: 5,
    date: new Date((new Date).valueOf() - 40),
    // Price in pennies
    price: 0,
    description: `<p>Issue - Do you dream of finding a career you love, but don’t even know what your passions are?</p>

      <p>Solution - This micro-course is filled with a series of fun exercises that will tap into your hidden interests and</p>

      <p>Benefit - The result will be a greater understanding of what drives you in life, and will give you a sense of clarity around where to search for your next career!</p>

      <p>Proof - “You’ve got to find what you love. The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.” - Steve Jobs</p>`,
    courseOutline: {
      lesson1: 'What did you grow up around?',
      lesson2: 'What can you talk about easily on a Saturday night with a complete stranger?',
      lesson3: 'What have you stopped doing because you think it’s ‘childish’?',
      lesson4: 'What do strangers say about you?',
      lesson5: 'If there were no limitations or consequences, what would your perfect average day look like?',
      lesson6: 'What have you been doing for the past 5 to 10 years?',
      lesson7: 'What would you do if you knew your results?',
    },
    mentor: 1,
  },
  1: {
    id: 1,
    backdrop: `${__API_URL__}/static/mountain.jpg`,
    thumbnail: `${__API_URL__}/static/mountain_tn.jpg`,
    name: "How to get more done in less time",
    rating: 4.5 / 5,
    numberOfReviews: 47,
    numberOfSteps: 6,
    minutesPerStep: 5,
    date: new Date((new Date).valueOf() - 45),
    description: `<p>Issue: Have you ever had a day when no matter how many tasks you complete, you feel as if you still haven’t got anything done?</p>

      <p>Solution: This micro-course shows you a simple method you can implement to cut through and determine what tasks give you the greatest results.</p>

      <p>Benefit: When you practice this micro-skill, you begin to experience the results of high-impact tasks, and free yourself of the ones you don’t want or need to do!</p>

      <p>Proof: “It is not a daily increase, but a daily decrease. Hack away at the inessentials.” 
      ― Bruce Lee</p>
    `,
    courseOutline: {
      lesson1: 'Create a list of tasks',
      lesson2: 'Priority planning',
      lesson3: 'Which task when completed would make others redundant?',
      lesson4: 'Delegation',
      lesson5: 'Deletion',
      lesson6: 'Action',
    },
    mentor: 1,
  },
  3: {
    id: 3,
    backdrop: `${__API_URL__}/static/business-cash-coin-concept-41301.jpeg`,
    thumbnail: `${__API_URL__}/static/business-cash-coin-concept-41301_tn.jpg`,
    name: "How to approach the right business mentor", 
    rating: 3.7 / 5,
    numberOfReviews: 3,
    numberOfSteps: 7,
    minutesPerStep: 5,
    date: new Date((new Date).valueOf() - 5),
    description: `<p>Issue - Mentors can help you compress decades into days, faster than books or videos could ever accomplish. But how do you feel approaching a mentor you’ve never met before, or a busy person with very little time?</p>

      <p>Solution - In this micro-course, you’ll learn the steps to connecting with busy people and increasing your chances of making a positive impact. </p>

      <p>Benefit - With the right persistence, your result will be the beginning of a mentoring relationship that could accelerate your career and save you years of time!</p>
    `,
    courseOutline: {
      lesson1: 'Crafting your vision',
      lesson2: 'Making a list of potentials',
      lesson3: 'What do you know about them?',
      lesson4: 'Finding a personal reference',
      lesson5: 'Where to find them',
      lesson6: 'Making the approach',
      lesson7: 'Arrange a meeting',
    },
    mentor: 1,
  },
  10: {
    id: 10,
    backdrop: `${__API_URL__}/static/pen-writing-notes-studying.jpg`,
    thumbnail: `${__API_URL__}/static/pen-writing-notes-studying_tn.jpg`,
    name: "How to write a persuasive email ",
    rating: 4 / 5,
    numberOfReviews: 22,
    numberOfSteps: 7,
    minutesPerStep: 5,
    date: new Date((new Date).valueOf() - 15),
    description: `<p>Issue: How do you feel writing an important email to your boss, or a new business contact? If you’re unrecognised by your recipient, there’s a high chance your email (and name) could end up on the spam list!</p>

      <p>Solution: In this micro-course, you’ll learn the fundamental steps to constructing an email that communicates your message and respects the reader at the same time.</p>

      <p>Benefit: Having an understanding of these key steps will help you to build new relationships and gain trust with those you send them to. </p>

      <p>Proof: “Wow, since I put these steps into practice I’ve created relationships with 3 CEO’s and a childhood hero of mine. Thank you so much!”</p>

    `,
    courseOutline: {
      lesson1: 'Respect the reader’s time',
      lesson2: 'Introduce the challenge',
      lesson3: 'Provide the reader with the solution(s)',
      lesson4: 'Explain their benefits',
      lesson5: 'Show your proof',
      lesson6: 'How to wrap it up',
      lesson7: 'The final check (Grammarly)',
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