 class apiError extends Error{
    constructor(
        statusCode,
        Message='something went wront',
        error=[],
        statch=""

    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=this.message
        this.success=false
        this.error=error
    }
 }

 export{apiError}