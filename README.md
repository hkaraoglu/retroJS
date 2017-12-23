# retroJS

This is a Pure Javascipt HTTP client library. It is inspired by Retrofit. It is flexible and extendible. There is no standard. Maybe in the future...

It needs Jquery.

<b>Add dependencies to your html head: </b>
<pre>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="callback.js"></script>
<script type="text/javascript" src="service.js"></script>
</pre>

<b>Create a service instance to access your services that you defined: </b>

<pre>
<script>
   var service = new Service("your web service url");
</script>
</pre>

<b>To make a request: </b>

<pre>

function onLoginCallBackSuccess(data)
{ 
}
function onLoginCallBackComplete()
{ 
}
function onLoginCallBackError(message)
{ 
}

var callback = new CallBack({
              onSuccess:onLoginCallBackSuccess,
              onComplete:onLoginCallBackComplete,
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
      this.request.start("POST", "auth/login", {username:username, password:password}, callback, true) // true : async service
    }

}
</pre>

