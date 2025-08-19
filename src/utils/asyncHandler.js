//  const asyncHandler=()=>{}




 export{asyncHandler}



 const asyncHandler=(fn)=>(req,res,next)=>{

    try {
        
    } catch (error) {
        res.Status(error.code||500).json({
            success:false,
            Message:error.Message
        })
    }
 }