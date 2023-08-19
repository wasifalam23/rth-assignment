const express = require('express');
const candidateController = require('../controllers/candidateController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    candidateController.getAllCandidates
  )
  .post(candidateController.createCandidate);

router.use(authController.protect, authController.restrictTo('admin'));

router
  .route('/:id')
  .get(candidateController.getCandidateById)
  .patch(candidateController.updateCandidate)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    candidateController.deleteCandidate
  );

module.exports = router;
