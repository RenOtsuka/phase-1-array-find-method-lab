// code your solution here

function superbowlWin(array){

    const findelem = array.find(elem => elem.result === 'W')
    console.log(findelem);

    if(findelem != undefined){
        return findelem.year;
    }
    else{
        return undefined;
    }
    
    

}