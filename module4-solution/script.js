(function(window){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];// predefined array of names
    for(var i in names){
        var fc= ((names[i]).charAt(0).toLowerCase());// gets into the array and then goes to the first character, then makes the first character small so that we only ahave to check for j only
        if (fc=='j'){ 
            window.byespeaker.speak(names[i]);//calls the speak function in the byspeaker object which was makde global
        }
        else{
            window.hellospeaker.speak(names[i]);//calls the speak function in the the hello speaker object which was made global
        }
}
})(window);
