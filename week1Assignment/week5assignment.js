/* menu app that allows us to manage people and the kinds of cars they drive */

class Drivers {                                   // creates a class called drivers         
    constructor (name, raceNumber){               // creates and initializes an object instance of drivers for their name and race namber 
      this.name = name;                           // Allows us to refer to the name property from outside the class
      this.raceNumber = raceNumber;               // allows us to refer to the race number property outside the class
    }
    share(){                                              // function that shares information about the driver
      return `${this.name} is ${this.raceNumber}.`;
  }
  } 
 class Cardriven {                              // creates a class called Cardriven
    constructor (carName){                      // creates and initializes an object carName 
      this.carName = carName;                   // allows us to refer to carName outside the class
      this.drivers= [];                         // initizalizes an array to store drivers of that cars driven
    }
  
    addDrivers(driver){                       // function used to add drivers to the driver array 
    if(driver instanceof Drivers ){
      this.drivers.push(driver);
    } else                                     // checks if they entered a driver if not throws an error you can only add a driver
      throw new Error (`You Can Only add a Driver. Argument not a driver ${driver}`);
  }
   shareCarDriven(){                            // function to share information about the car driven
     return `${this.carName} has ${this.drivers.length }drivers.`;
   } 
  }
  
  class MainMenu{                               // creates a class called main menu
   
    constructor (){                             // gives a constructor with no arguments 
    this.carsDriven = [];                       // initalizes a carsDriven array object
    this.selectedCarsDriven = null;             //initializes a seclectedCarsDriven onject with a null value 
    }
    
    startMain(){                                 // function used to create a menu
      let selection = this.showMainMenu();         // creates a variable selection that is equal to an instance showMainMenu
      
      while(selection !=0 ){                    // while the loop doesnt equal zero it creates a switch statement to choose options from the menu
        switch (selection){
          case '1':
            this.createCarsDriven();            // Choosing 1 calls the createCarsDriven function
            break;
          case '2':
            this.viewCarsDriven();              // Choosing 2 calls the viewCarsDriven function
            break;
          case '3':
            this.deleteCarsDriven();          // Choosing 3 calls the deleteCarsDriven function
            break;
          case '4':
            this.displayCarsDriven();         //Choosing 4 calls the displayCarsDriven function
            break;
          default:                            //everythingg else automatically is equal to a zero
            selection = 0;
        }
        selection = this.showMainMenu();
        
      }
      alert('Outside loop. Bye');           // If you choose 0 it will alert you are out of the loop and end the program
    }
    
    showMainMenu(){                         //function that shows the main menu option and allows users to return a number to choose what they want to do in the menu
      return prompt(`
        0) Exit
        1) Create A Car
        2) View A Car Driven
        3) Delete A Car Driven
        4) Display All Cars Driven
      `);
    }
  
    showCarsDrivenMenuOptions(description){  // function that shows the previous car the created and allows the user to create a driver to go with the car they are driving
        return prompt(`
        0. Go Back
        1. Create Driver
        2. Permanently Delete Driver From Existence 
        ${description}

        `);

    }

    displayCarsDriven(){                    // funciton that creates a string, iterates throgh the carsDriven array and prints out all the names of the cars driven 
      let carsString= ` `;
      for(let i = 0; i < this.carsDriven.length; i++){
        carsString += i + ' ' + this.carsDriven[i].carName + '\n';
      }
      alert(carsString)
    }
    createCarsDriven(){                           // function that prompts the user to enter a car name and then pushes the car name to the cardriven class
      let carName = prompt('Please enter a Car name: ');
      this.carsDriven.push(new Cardriven(carName));
    }
  
    viewCarsDriven(){                                                       // function that takes an index and sets the selected value equal to the index of the carsdriven arry
      let index = prompt('Enter the position 0-X of the car you want to see'); //It then iterates through the array and prints out the information of the selected indexed car
      if(index > -1 && index < this.carsDriven.length){
        this.selectedCarsDriven = this.carsDriven[index];
        let description = 'Car Driven: ' + this.selectedCarsDriven.carName + '\n';

        for (let i = 0; i < this.selectedCarsDriven.drivers.length; i++){
            description += i + ') ' + this.selectedCarsDriven.drivers[i].name + ' - '  + this.selectedCarsDriven.drivers[i].raceNumber + '\n';
        }
    let selection = this.showCarsDrivenMenuOptions(description)               // creates a variable selection and sets it equal to an instance of the function showCarsDrivenMenuOptions
    switch(selection){                                                        // switch statement allowsing you to choose options on the menu
        case '1': 
        this.createDriver();
        break;
        case '2':
        this.deleteDriver();
                  }
      }

    }
    
    deleteCarsDriven(){
      let index = prompt('Enter the position 0-X of the car you want to delete');  // takes in an index of the carsDriven array and deletes that indexed car from the array
      if(index > -1 && index < this.carsDriven.length){
        this.carsDriven.splice(index, 1);
      }

    }
    createDriver(){                                                                 // prompts for a name and a number amd then pushes the drivers name and number to the Drivers class to store the name and number values
      let name = prompt('Please enter a Driver name for the car');
      let raceNumber = prompt('Please enter the Drivers number for the car');
      this.selectedCarsDriven.drivers.push(new Drivers(name, raceNumber));

    }

    deleteDriver(){                                                                                               // takes in an index of the selectedCarsDriven and deletes it 
        let index = prompt('Enter the index (0-X) of the Driver You want to permanently delete from existence');
        if(index >-1 && index < this.selectedCarsDriven.drivers.length){
        this.selectedCarsDriven.drivers.splice(index, 1);
      
        }
    }

  }
  
let menu = new MainMenu();    // creates a variable menu and sets it equal to a new menu so that all our choices are stored
menu.startMain();             // starts the main menu
