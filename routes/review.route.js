const { Router } = require('express')
const { reviewController } = require('../controllers/review.controller')

const router = Router()

router.post('/review', reviewController.addReview)
router.delete('/review/:id', reviewController.deleteReview)
router.get('/rewiev/:id', reviewController.getReviewByID)



module.exports = router;
