// CACHE OUR GAME REFFERNCE
var halloween = {};

// CACHE REFFERENCE TO BOOT ON OUR GAME AND SET TO OBJECT
halloween.boot = function(game){};

// WHEN GAME BOOTS ADD FUNCTIONALITY
halloween.boot.prototype = {

    // WHEN GAME IS PRELOADING, IE "ON PRELOAD"
    preload: function() {},
    
    // WHEN GAME IS GENERATING IE "ON CREATE"
    create: function() {
        
        /* ------------------------------------------------
        - "this" reffers to the "game" created in the index 
        - meaning the main game instance
        */
        
    }
    
}