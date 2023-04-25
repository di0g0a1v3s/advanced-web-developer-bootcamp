function countDown(time) {
    let timeGoal = time;
    const timer = setInterval( () =>
        {
            timeGoal -= 1;
            if(timeGoal <= 0) {
                clearInterval(timer);
                console.log("Ring Ring Ring!!!");
                
            } else {
                console.log("Timer: " + timeGoal);
            }
            
        }, 1000)
};

countDown(3);