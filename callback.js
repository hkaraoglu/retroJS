function CallBack(functions)
{
    this.onSuccessFunction = functions.hasOwnProperty('onSuccess') ? functions.onSuccess : null;
    this.onCompleteFunction = functions.hasOwnProperty('onComplete') ? functions.onComplete : null;
    this.onErrorFunction = functions.hasOwnProperty('onError') ? functions.onError : null;
    // Add more custom functions...

    this.onSuccess = function(result)
    {
       // your implementation
       this.onSuccessFunction(result);
       this.onCompleteFunction();
    }

    this.onError = function(message)
    {
         // your implementation.
       this.onErrorFunction(message);
       this.onCompleteFunction();
    }
}
