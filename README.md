# retroJS

This is a Pure Javascipt HTTP client library. It is inspired by Retrofit. It is flexible and extendible. There is no standard. Maybe in the future...

It needs Jquery.

<b>To make a request: </b>

<pre>var callback = new CallBack({
              onSuccess:onLoginCallBackSuccess,
              onComplete:onLoginCallBackSuccess,
              onError:onLoginCallBackError,
});
service.login('username', 'password', callback);
</pre>

<b>Place that your web services locate: </b>
<pre>
class Service
{

    // your services are here....
    
    // Example
    function login(username, password, callback)
    {
      this.getResponse("POST", "auth/login", {username:username, password:password}, callback, true) // true : async service
    }

}
</pre>

