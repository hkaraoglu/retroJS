class Service
{
    constructor(serviceUrl)
    {
        this.request = new Request(serviceUrl);
    }

    // example POST service
    login(email, password, callback)
    {
      this.request.start("POST", "login", {"email" : email, "password" : password, "password" : password }, callback, true);
    }

    //example GET serviceUrl
    forgotten(email, callback)
    {
      this.request.start("GET", "auth/forgotten?email=" + email , "", callback, true);
    }
}
