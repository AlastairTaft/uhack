require("babel-polyfill");

import { Router } from 'express'

const router = new Router();

const mentors = {
  1: {
    id: 1,
    thumbnail: `${__API_URL__}/static/unknown_person.png`,
    name: 'Alice Simons',
    title: 'Sales Trainer',
    description: `<p>Alicia Simons has been cracking the code behind the
     psychology of selling since the start of her career. With a masters 
     degree in behavioural psychology, she fuses her scientific knowledge with 
     sales prowess to crack the secret to successful sales. Undertake her
     cold calling micro-course and take back control in your sales calls today.</p>`
  },
}

router.get('/:id', (req, res, next) => {
  var id = req.params.id

  var mentor = mentors[id]
  if (!mentor){
    return res.status(404).send({
      message: 'Mentor not found.'
    })
  }
  res.send(mentor)
})

export default router