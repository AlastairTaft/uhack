require("babel-polyfill");

import { Router } from 'express'

const router = new Router();
/**
 * Map from course id to lessons
 */
const lessons = {
  11: [{
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
  ],
  7: [{
      title: 'Discover what you want',
      description: 'Lesson 1 text',
      estimatedNumberOfMinutes: 5,
    },
    {
      title: 'Find your inspiration',
      description: 'Lesson 2 text',
      estimatedNumberOfMinutes: 5,
    },
    {  
      title: 'Find your method of creation',
      description: 'Lesson 3 text',
      estimatedNumberOfMinutes: 5,
    },  
    {
      title: 'Write your goals',
      description: 'Lesson 4 text',
      estimatedNumberOfMinutes: 5,
    },  
    {
      title: 'Print/Post your content',
      description: 'Lesson 5 text',
      estimatedNumberOfMinutes: 5,
    },  
  ],
  2: [{
      title: 'What did you grow up around?',
      description: 'Lesson 1 text',
      estimatedNumberOfMinutes: 5,
    },
    {
      title: 'What can you talk about easily on a Saturday night with a complete stranger?',
      description: 'Lesson 2 text',
      estimatedNumberOfMinutes: 5,
    },
    {  
      title: 'What have you stopped doing because you think it’s ‘childish’?',
      description: 'Lesson 3 text',
      estimatedNumberOfMinutes: 5,
    },  
    {
      title: 'What do strangers say about you?',
      description: 'Lesson 4 text',
      estimatedNumberOfMinutes: 5,
    },  
    {
      title: 'If there were no limitations or consequences, what would your perfect average day look like?',
      description: 'Lesson 5 text',
      estimatedNumberOfMinutes: 5,
    },   
    {
      title: 'What have you been doing for the past 5 to 10 years?',
      description: 'Lesson 6 text',
      estimatedNumberOfMinutes: 5,
    },  
    {
      title: 'What would you do if you knew your results?',
      description: 'Lesson 7 text',
      estimatedNumberOfMinutes: 5,
    }, 
  ],
  1: [{
      title: 'Create a list of tasks',
      description: 'Lesson 1 text',
      estimatedNumberOfMinutes: 5,
    },
    {
      title: 'Priority planning',
      description: 'Lesson 2 text',
      estimatedNumberOfMinutes: 5,
    },
    {  
      title: 'Which task when completed would make others redundant?',
      description: 'Lesson 3 text',
      estimatedNumberOfMinutes: 5,
    },  
    {
      title: 'Delegation',
      description: 'Lesson 4 text',
      estimatedNumberOfMinutes: 5,
    },  
    {
      title: 'Deletion',
      description: 'Lesson 5 text',
      estimatedNumberOfMinutes: 5,
    },   
    {
      title: 'Action',
      description: 'Lesson 6 text',
      estimatedNumberOfMinutes: 5,
    },  
  ],
  3: [{
      title: 'Crafting your vision',
      description: 'Lesson 1 text',
      estimatedNumberOfMinutes: 5,
    },
    {
      title: 'Making a list of potentials',
      description: 'Lesson 2 text',
      estimatedNumberOfMinutes: 5,
    },
    {  
      title: 'What do you know about them?',
      description: 'Lesson 3 text',
      estimatedNumberOfMinutes: 5,
    },  
    {
      title: 'Finding a personal reference',
      description: 'Lesson 4 text',
      estimatedNumberOfMinutes: 5,
    },  
    {
      title: 'Where to find them',
      description: 'Lesson 5 text',
      estimatedNumberOfMinutes: 5,
    },   
    {
      title: 'Making the approach',
      description: 'Lesson 6 text',
      estimatedNumberOfMinutes: 5,
    },    
    {
      title: 'Arrange a meeting',
      description: 'Lesson 7 text',
      estimatedNumberOfMinutes: 5,
    },  
  ],
  10: [{
      title: 'Respect the reader’s time',
      description: 'Lesson 1 text',
      estimatedNumberOfMinutes: 5,
    },
    {
      title: 'Introduce the challenge',
      description: 'Lesson 2 text',
      estimatedNumberOfMinutes: 5,
    },
    {  
      title: 'Provide the reader with the solution(s)',
      description: 'Lesson 3 text',
      estimatedNumberOfMinutes: 5,
    },  
    {
      title: 'Explain their benefits',
      description: 'Lesson 4 text',
      estimatedNumberOfMinutes: 5,
    },  
    {
      title: 'Show your proof',
      description: 'Lesson 5 text',
      estimatedNumberOfMinutes: 5,
    },   
    {
      title: 'How to wrap it up',
      description: 'Lesson 6 text',
      estimatedNumberOfMinutes: 5,
    },    
    {
      title: 'The final check (Grammarly)',
      description: 'Lesson 7 text',
      estimatedNumberOfMinutes: 5,
    },  
  ],
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