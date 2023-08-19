const catchAsync = require('../utils/catchAsync');
const Candidate = require('../models/candidateModel');
const AppError = require('../utils/appError');

exports.getAllCandidates = catchAsync(async (req, res, next) => {
  const candidates = await Candidate.find();

  res.status(200).json({
    status: 'success',
    results: candidates.length,
    data: {
      candidates,
    },
  });
});

exports.getCandidateById = catchAsync(async (req, res, next) => {
  const candidate = await Candidate.findById(req.params.id);

  if (!candidate) {
    return next(new AppError('No candidate found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      candidate,
    },
  });
});

exports.createCandidate = catchAsync(async (req, res, next) => {
  const candidate = await Candidate.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      candidate,
    },
  });
});

exports.updateCandidate = catchAsync(async (req, res, next) => {
  const newCandidate = await Candidate.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!newCandidate) {
    return next(new AppError('No candidate found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      candidate: newCandidate,
    },
  });
});

exports.deleteCandidate = catchAsync(async (req, res, next) => {
  await Candidate.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: 'success',
    data: null,
  });
});
