 class apiError extends Error{
    constructor(
        statusCode,
        Message='something went wront',
        error=[],
        stack=""

    ){ 
        super(Message)
        this.statusCode=statusCode
        this.data=null
        this.Message=this.Message
        this.success=false
        this.error=error
    }
 }

 export{apiError}