function CallBack(n){this.onSuccessFunction=n.hasOwnProperty("onSuccess")?n.onSuccess:null,this.onCompleteFunction=n.hasOwnProperty("onComplete")?n.onComplete:null,this.onErrorFunction=n.hasOwnProperty("onError")?n.onError:null,this.onSuccess=function(n){this.onSuccessFunction(n),null!=this.onCompleteFunction&&this.onCompleteFunction()},this.onError=function(n){null!=this.onErrorFunction&&this.onErrorFunction(n),null!=this.onCompleteFunction&&this.onCompleteFunction()}}function Request(n){this.start=function(o,t,c,s,e){var i="";"POST"==o&&(i=c),$.ajax({type:o,cache:void 0==e.cache?!0:e.cache,async:void 0==e.async?!0:e.async,xhrFields:{withCredentials:!0},url:n+"/"+t,data:i,success:function(n,o,t){s.onSuccess(n)},error:function(n){s.onError(n.message)}})}}
