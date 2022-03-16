(function(window){
    var byespeaker={};
    var speakword="Goodbye";
    byespeaker.speak=function(name){//makes a function speak in the byespeaker tag
        console.log(speakword+" "+name);
    }
    window.byespeaker = byespeaker;//makes this object global
})(window);