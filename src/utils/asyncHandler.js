import { request } from "express"

const asyncHandler = ( requestHandler ) => {

   (req, res, next) => {
    Promise.resolve(requestHandler (req, res, next)).catch(
        (err) => next(err)
    )
   }
}



export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (fun) => () => {}
// const asyncHandler = (fn) => async() => {}

// const asyncHandler = () => async(req, res, next) => {
//     try {
//        await fn(req, res, next) 
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             Message: err.message
//         })
        
//     }
// }