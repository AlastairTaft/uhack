require("babel-polyfill");

import { Router } from 'express'

const router = new Router();

const mentors = {
  1: {
    id: 1,
    thumbnail: `${__API_URL__}/static/unknown_person.png`,
    name: 'Alice Simons',
    title: 'Sales Trainer',
    description: 'Alicia Simons has been cracking the code...'
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