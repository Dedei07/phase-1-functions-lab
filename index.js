// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    let headquarterLocation = 42;
    let distanceFromHqInBlocks = 50;
    if (distance>= headquarterLocation){
        return distance - headquarterLocation;
    }else{
        return headquarterLocation-distance;
    }
}
function distanceFromHqInFeet (distance){
    let eachBlockInManhattan = 264;
    return distanceFromHqInBlocks(distance) * eachBlockInManhattan
    
} 
        
        function distanceTravelledInFeet (start, destination){
            let eachBlockInManhattan = 264
            let differenceInFeet = destination - start
            if (destination > start){
                return differenceInFeet * eachBlockInManhattan
            }else{
                    return (start- destination) * eachBlockInManhattan
            }
        
            }
        function calculatesFarePrice (start, destination){
            let price;
            let differenceInFeet;
           if (destination > start){
               differenceInFeet = (destination -start) * 264
            }
           else{
               differenceInFeet = (start - destination) * 264
            }   
           if (differenceInFeet <=400){
                return price = 0;         
            }
           else if
               (differenceInFeet > 400 && differenceInFeet <= 2000){
                return price = (differenceInFeet - 400) * 0.02       
            }
           else if (differenceInFeet > 2000 && differenceInFeet <= 2500){
                return price = 25    
            
           }else
                return price = 'cannot travel that far'         
            }         
            
            
           


            
    
    

    
    
