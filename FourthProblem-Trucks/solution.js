function solve() {

    let trucks = [];
    let backupTires = +0;
    let truckTotalDistance = +0;

    //NEW TRUCK
    let buttonNewTruck = document.getElementsByTagName('button')[0];

    buttonNewTruck.addEventListener('click', () => {

        let plateNum = document.getElementById('newTruckPlateNumber');
        let tireCond = document.getElementById('newTruckTiresCondition');


        let truck = {
            plateNumber: plateNum.value,
            tiresCondition: +tireCond.value[0],
        };

        if (!trucks.some(t => t.plateNumber === plateNum.value)) {
            trucks.push(truck);
        }

    });

    //NEW TIRES
    let buttonNewTires = document.getElementsByTagName('button')[1];

    buttonNewTires.addEventListener('click', () => {

        let newTiresCondition = document.getElementById('newTiresCondition');

        backupTires += +newTiresCondition.value[0];

    });

    //WORK
    let buttonWork = document.getElementsByTagName('button')[2];

    buttonWork.addEventListener('click', () => {

        let workPlateNumber = document.getElementById('workPlateNumber');
        let distance = document.getElementById('distance');

        let truckToFind = trucks.find(t => t.plateNumber === workPlateNumber;
        if(truckToFind){
            let condition = +truckToFind.tiresCondition;
            let reduce = (distance / 1000).toFixed(0);
            condition = condition - reduce;
            if(condition <= 0){
               let change = backupTires -+ condition;
               if(change <= 0){

               }
               else{
                   truckTotalDistance += distance;
               }

            }
            else{
                truckTotalDistance += distance;
            }

        }


    });

}