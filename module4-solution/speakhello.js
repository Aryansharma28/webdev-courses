(function (window) {
var hellospeaker={};//declares an object hello speaker
var speakword="hello";// sets speakword to hello
hellospeaker.speak=function(name){// makes a function speak in the object hello speaker, that prints hello name
      console.log(speakword+" "+name);
   }
window.hellospeaker=hellospeaker;// makes this a global object
})(window);
