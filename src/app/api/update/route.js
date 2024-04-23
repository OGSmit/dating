

module.exports.updateUser = (req, res, next) => {
    const {
      email,
      name,
    } = req.body;
  
    User
      .findByIdAndUpdate(
        req.user._id,
        {
          email,
          name,
        },
        {
          new: true,
          runValidators: true,
        },
      )
      .orFail()
      .then((user) => res.status(200)
        .send({ data: user }))
      .catch((err) => {
        if (err.name === 'DocumentNotFoundError') {
          next(new NotFoundError(notFoundErrorMessage));
        } else {
          next(err);
        }
      });
  };