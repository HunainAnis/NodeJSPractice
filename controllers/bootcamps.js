// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success:true, msg:"Show all Bootcamps"})
}

// @desc        Get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      private
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success:true, msg:`get bootcamp with id ${req.params.id}`})
}

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps/:id
// @access      private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success:true, msg:"Create new bootcamp"})
}

// @desc        Update bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success:true, msg:`update bootcamp with id ${req.params.id}`})
}

// @desc        Delete bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success:true, msg:`Delete bootcamp with id ${req.params.id}`})
}