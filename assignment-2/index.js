// import library
import fetch from "node-fetch";



// Define Class
class Country{
    constructor(){
        this.baseurl  = "https://restcountries.com/v3.1/all";
        this.countryNameurl = "https://restcountries.com/v3.1/name/{name}?fullText=true";
        this.languageurl ="https://restcountries.com/v3.1/lang/{lang}";

    }

    // Method to get list of all countries
    async getCountryName(){
        try{
            let getResponse = await  fetch(this.baseurl);
            let countryData = await getResponse.json();
            let countryNames  = countryData.map((x) =>{
                return x.name.common;
            });
            console.log(countryNames);
            return countryNames;

        }
        catch(error){
            console.log(error)
        }
        
    }

    
    // Method for searching  country information
    async searchCountry(countryname){
        try{
            let getResponse = await fetch(this.countryNameurl.replace("{name}",countryname));
            let countryData = await getResponse.json();
            console.log(countryData);
            return countryData;
        }
        catch(error){
            console.log(error)
        }
       
        
    }


    // Method finding bordering countries
    async countryBorder(countryname){

        try{
            let getResponse = await  fetch(this.countryNameurl.replace("{name}",countryname));
            let countryData = await getResponse.json();
            let borders = countryData.map((x) =>{
                return x.borders;
            });
            console.log(borders);
            return borders;

        }catch(error){
            console.log(error);
        }
        
    }



    // Method to find country based on language speaking
    async languageSopeknCountry(language){
        try{
           let getResponse = await fetch(this.languageurl.replace("{lang}",language));
           let dataCountry =  await getResponse.json();
           let countryNames = dataCountry.map((x) => {
               return x.name;
           });
           console.log(countryNames);
           return countryNames;
        }
        catch(error){
          console.log(error);
        }
    }

    
    //Method to find country based on population
    async findCountryBasedPouplation(poulutionNumber) {
        let getResponse = await fetch(this.baseurl);
        let countryData = await getResponse.json();
        let  filterBasedPopu= countryData.filter((country) => {
            return country.population > poulutionNumber
        });
        let country = filterBasedPopu.map((x) => {
            return x.name.common;
           }); 
        console.log(country);
        return country;
      }

}

let country = new Country();
country.getCountryName();
//country.searchCountry('Nepal');
//country.countryBorder('Nepal')
//country.languageSopeknCountry('nep');
//country.findCountryBasedPouplation(60000000)
 




