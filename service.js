class Service
{
    constructor(serviceUrl)
    {
        this.serviceUrl = serviceUrl;
    }

    // example POST service
    login(email, password, callback)
    {
      this.getResponse("POST", "auth/login", {"email" : email, "password" : password, "password" : password }, callback, true);
    }

    //example GET serviceUrl
    forgotten(email, callback)
    {
      this.getResponse("GET", "auth/forgotten?email=" + email , "", callback, true);
    }

    getResponse(type, path, parameters, callback, async)
  	{
  		var data = "";
  		if(type == 'POST')
  		{
  			data = parameters;
  		}
  		$.ajax({
  			type: type,
  			cache: false,
  			async: async,
  			xhrFields: {
  				withCredentials: true
  			},
  			url: this.serviceUrl + "/" + path,
  			data:data,
  			success: function(result, status, xhr)
  			{
  				callback.onSuccess(result);
        },
  			error: function(xhr)
  			{
          callback.onError(xhr.message);
        },
      });
  	}

}
