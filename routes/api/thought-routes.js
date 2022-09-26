const router = require('express').Router();
const { getAllThoughts,
    getThoughtById,
     addThought,
     updateThought } = require('../../controllers/thought-controller');


router.route('/')
.get(getAllThoughts)
.post(addThought);

router.route('/:id')
.get(getThoughtById)
.put(updateThought);


module.exports = router;