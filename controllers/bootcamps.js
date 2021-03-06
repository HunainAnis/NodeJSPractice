const Bootcamp =  require('../models/Bootcamps')
/**
 * @desc        Get all bootcamps
 * @route       GET /api/v1/bootcamps
 * @access      public
*/
exports.getBootcamps = async (req, res, next) => {
    try {
        const allBootcamps = await Bootcamp.find();
        res.status(200).json({
            success:true,
            count:allBootcamps.length,
            data:allBootcamps,
        }) 
    } catch (error) {
        res.status(400).json()
    }
    // res.status(200).json({success:true, msg:"Show all Bootcamps"})
}

/**
 * @desc        Get single bootcamp
 * @route       GET /api/v1/bootcamps/:id
 * @access      private
 */
exports.getBootcamp = async (req, res, next) => {
    try {
        const theBootcamp = await Bootcamp.findById(req.params.id);
        
        if(!theBootcamp) {
            res.status(400).json({success:false})
        }
        else {
            res.status(200).json({
                success:true,
                data:theBootcamp,
            }) 
        }
    } catch (error) {
        res.status(400).json({success:false})
    }
}

/**
 * @desc        Create new bootcamp
 * @route       POST /api/v1/bootcamps/:id
 * @access      private
 */
exports.createBootcamp = async (req, res, next) => {
    try {
        const newBootcamp = await Bootcamp.create(req.body)
        res.status(201).json({
            success:true,
            data:newBootcamp
        })
    } catch (error) {
        res.status(400).json({
            success:false
        })
    }
    // console.log("Body Data", req.body)
    // res.status(200).json({success:true, msg:"Create new bootcamp"})
}
/**
 * @desc        Update bootcamp
 * @route       PUT /api/v1/bootcamps/:id
 * @access      private
*/
exports.updateBootcamp = async (req, res, next) => {
    try {
        const updatedBootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true
        })
        if(!updatedBootcamp) {
            res.status(400).json({success:false})
        }
        else {
            res.status(200).json({
                success:true,
                data:updatedBootcamp
            })
        }

    } catch (error) {
        res.status(400).json({
            success:false
        })
    }
    // res.status(200).json({success:true, msg:`update bootcamp with id ${req.params.id}`})
}
/**
 * @desc        Delete bootcamp
 * @route       DELETE /api/v1/bootcamps/:id
 * @access      private
*/
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const updatedBootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
        if(!updatedBootcamp) {
            res.status(400).json({success:false})
        }
        else {
            res.status(200).json({
                success:true,
                data:{}
            })
        }

    } catch (error) {
        res.status(400).json({
            success:false
        })
    }
    // res.status(200).json({success:true, msg:`Delete bootcamp with id ${req.params.id}`})
}