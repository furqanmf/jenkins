class HttpError extends Error{
    constructor (message, statucCode){
        super( message );

        this.statusCode = statucCode
    
    }
}
export default HttpError;