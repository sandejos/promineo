/* menu app that allows us to manage people and the kinds of cars they drive */

class Drivers {
    constructor (name, raceNumber){
      this.name = name;
      this.raceNumber = raceNumber;
    }
    share(){
      return `${this.name} is ${this.age} years old.`;
  }
  }
  class Cardriven {
    constructor (carName){
      this.carName = carName;
      this.drivers= [];
    }
  
    addDrivers(driver){
    if(driver instanceof Drivers ){
      this.drivers.push(driver);
    } else 
      throw new Error (`You Can Only add a Driver. Argument not a driver ${driver}`);
  }
   share(){
     return `${this.carName} has ${this.drivers.length }drivers.`;
   } 
  }
  
  class MainMenu{
   
    constructor (){
    this.carsDriven = [];
    this.selectedCarsDriven = null;
    }
    
    startMain(){
      let selection = this.showMainMenu();
      
      while(selection !=0 ){
        switch (selection){
          case '1':
            this.createCarsDriven();
            break;
          case '2':
            this.viewCarsDriven();
            break;
          case '3':
            this.deleteCarsDriven();
            break;
          case '4':
            this.displayCarsDriven();
            break;
          default:
            selection = 0;
        }
        selection = this.showMainMenu();
        
      }
      alert('Outside loop. Bye');
    }
    
    showMainMenu(){
      return prompt(`
        0) Exit
        1) Create A Car
        2) View A Car Driven
        3) Delete A Car Driven
        4) Display All Cars Driven
      `);
    }
  
    showCarsDrivenMenuOptions(description){
        return prompt(`
        0. Go Back
        1. Create Driver
        2. Permanently Delete Driver From Existence 
        ${description}

        `);

    }

    displayCarsDriven(){
      let carsString= ` `;
      for(let i = 0; i < this.carsDriven.length; i++){
        carsString += i + ' ' + this.carsDriven[i].carName + '\n';
      }
      alert(carsString)
    }
    createCarsDriven(){
      let carName = prompt('Please enter a Car name: ');
      this.carsDriven.push(new Cardriven(carName));
    }
  
    viewCarsDriven(){
      let index = prompt('Enter the position 0-X of the team you want to see');
      if(index > -1 && index < this.carsDriven.length){
        this.selectedCarsDriven = this.carsDriven[index];
        let description = 'Car Driven: ' + this.selectedCarsDriven.carName + '\n';

        for (let i = 0; i < this.selectedCarsDriven.drivers.length; i++){
            description += i + ') ' + this.selectedCarsDriven.drivers[i].name + ' - '  + this.selectedCarsDriven.drivers[i].raceNumber + '\n';
        }
    let selection = this.showCarsDrivenMenuOptions(description)
    switch(selection){
        case '1': 
        this.createDriver();
        break;
        case '2':
        this.deleteDriver();
                  }
      }

    }
    
    deleteCarsDriven(){
      let index = prompt('Enter the position 0-X of the car you want to delete');
      if(index > -1 && index < this.carsDriven.length){
        this.carsDriven.splice(index, 1);
      }

    }
    createDriver(){
      let name = prompt('Please enter a Driver name for the car');
      let raceNumber = prompt('Please enter the Drivers number for the car');
      this.selectedCarsDriven.drivers.push(new Drivers(name, raceNumber));

    }

    deleteDriver(){
        let index = prompt('Enter the index (0-X) of the Driver You want to permanently delete from existence');
        if(index >-1 && index < this.selectedCarsDriven.drivers.length){
        this.selectedCarsDriven.drivers.splice(index, 1);
      
        }
    }

  }
  
let menu = new MainMenu();
menu.startMain();
