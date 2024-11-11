// For the spinner in the first dropdown to pause/play the animation and display the correct button icon by adding/removing classes
document.querySelector("#animate1 .control").addEventListener("click", function(){
    document.querySelector("#animate1 img").classList.toggle("animate");
    if(document.querySelector("#animate1 img").classList.contains("animate")){
        document.querySelector("#animate1 .control .play").classList.add("hidden");
        document.querySelector("#animate1 .control .pause").classList.remove("hidden");
    }else{
        document.querySelector("#animate1 .control .play").classList.remove("hidden");
        document.querySelector("#animate1 .control .pause").classList.add("hidden");
    }
});

// For the heart in the second dropdown to pause/play the animation and display the correct button icon by adding/removing classes
document.querySelector("#animate2 .control").addEventListener("click", function(){
    document.querySelector("#animate2 img").classList.toggle("animate");
    if(document.querySelector("#animate2 img").classList.contains("animate")){
        document.querySelector("#animate2 .control .play").classList.add("hidden");
        document.querySelector("#animate2 .control .pause").classList.remove("hidden");
    }else{
        document.querySelector("#animate2 .control .play").classList.remove("hidden");
        document.querySelector("#animate2 .control .pause").classList.add("hidden");
    }
});

// For the heart in the third dropdown to pause/play the animation and display the correct button icon by adding/removing classes
document.querySelector("#animate3 .control").addEventListener("click", function(){
    document.querySelector("#animate3 img").classList.toggle("animate");
    if(document.querySelector("#animate3 img").classList.contains("animate")){
        document.querySelector("#animate3 .control .play").classList.add("hidden");
        document.querySelector("#animate3 .control .pause").classList.remove("hidden");
    }else{
        document.querySelector("#animate3 .control .play").classList.remove("hidden");
        document.querySelector("#animate3 .control .pause").classList.add("hidden");
    }
});

// For the heart in the fourth dropdown to pause/play the animation and display the correct button icon by adding/removing classes
document.querySelector("#animate4 .control").addEventListener("click", function(){
    document.querySelector("#animate4 img").classList.toggle("animate");
    if(document.querySelector("#animate4 img").classList.contains("animate")){
        document.querySelector("#animate4 .control .play").classList.add("hidden");
        document.querySelector("#animate4 .control .pause").classList.remove("hidden");
    }else{
        document.querySelector("#animate4 .control .play").classList.remove("hidden");
        document.querySelector("#animate4 .control .pause").classList.add("hidden");
    }
});

// For the heart in the fifth dropdown to pause/play the animation and display the correct button icon by adding/removing classes
document.querySelector("#animate5 .control").addEventListener("click", function(){
    document.querySelector("#animate5 img").classList.toggle("animate");
    if(document.querySelector("#animate5 img").classList.contains("animate")){
        document.querySelector("#animate5 .control .play").classList.add("hidden");
        document.querySelector("#animate5 .control .pause").classList.remove("hidden");
    }else{
        document.querySelector("#animate5 .control .play").classList.remove("hidden");
        document.querySelector("#animate5 .control .pause").classList.add("hidden");
    }
});