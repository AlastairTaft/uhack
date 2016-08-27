require("babel-polyfill");

import { Router } from 'express'

const router = new Router();
/**
 * Map from course id to lessons
 */
const lessons = {
  1: [{
      title: 'The importance of tonality',
      description: 'Lesson 1 text',
      estimatedNumberOfMinutes: 2.05,
    },
    {
      title: 'Knowing your outcome',
      description: 'Lesson 2 text',
      estimatedNumberOfMinutes: 2.5,
    },
    {  
      title: 'The opening line',
      description: 'Lesson 3 text',
      estimatedNumberOfMinutes: 2.,
    },  
    {
      title: 'Building rapport',
      description: 'Lesson 4 text',
      estimatedNumberOfMinutes: 2,
    },  
    {
      title: 'Collaborative closing',
      description: 'Lesson 5 text',
      estimatedNumberOfMinutes: 2,
    },  
    {
      title: 'Dealing with rejection',
      description: 'Lesson 6 text',
      estimatedNumberOfMinutes: 3,
    }, 
    {
      title: 'The call to action',
      description: 'Lesson 7 text',
      estimatedNumberOfMinutes: 2,
    },
  ]
}

router.get('/:courseId', (req, res) => {
  var id = req.params.courseId

  if (!lessons[id]){
    return res.status(404).send({
      message: 'No lessons were found matching that course id.'
    })
  }
  return res.send(lessons[id])
})

export default router