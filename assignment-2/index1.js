// Your code here
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
      
        fetch(this.baseurl)
        .then((getResponse) =>{
            return getResponse.json();
        })
        .then((countryDat) =>{
            let countryNames  = countryDat.map((x) =>{
                return x.name.common;
            });
            console.log(countryNames)
            return countryNames
        })
        .catch((error) =>{
            console.log(error)
        })
    }
        


    
    // Method for searching  country information
    async searchCountry(countryname){
        fetch(this.countryNameurl.replace("{name}",countryname))
        .then((getResponse) =>{
            return getResponse.json()
        })
        .then((countryData) => {
            console.log(countryData)
            return countryData;
        })
        .catch((error)=>{
            console.log(error)
        })     
    }


    // Method finding bordering countries
    async countryBorder(countryname){
        
        fetch(this.countryNameurl.replace("{name}",countryname))
        .then((getResponse)=>{
            return getResponse.json();
        })
        .then((countryData) =>{
           let border = countryData.map((x) =>{
            return x.borders;
            })
            console.log(border)
            return border;
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    


    // Method to find country based on language speaking
    async languageSopeknCountry(language){
        fetch(this.languageurl.replace("{lang}",language))
        .then((getResponse) =>{
            return getResponse.json();
        })
        
        .then((countryData) =>{
            let countryNames = countryData.map((x) =>{
                return x.name;
            })
            console.log(countryNames);
            return countryNames;

        })
        .catch((error) =>{
          console.log(error);
        })
    }

    
    //Method to find country based on population
    async findCountryBasedPouplation(poulutionNumber) {
        fetch(this.baseurl)
        .then((getResponse) => {
            return getResponse.json();
        })
        .then((countryData) =>{
            let filterBasedPopu = countryData.filter((country) => {
                return country.population > poulutionNumber
            })
            return filterBasedPopu;
        })
        .then((filterBasedPopu) => {
            let country = filterBasedPopu.map((x) => {
                return x.name.common;
            })
            console.log(country);
            return country;    
        })
        .catch((error) =>{
            console.log(error);
        })
    }

}



let country = new Country();
//country.getCountryName();
//country.searchCountry('Nepal');
//country.countryBorder('Nepal')
//country.languageSopeknCountry('nep');
country.findCountryBasedPouplation(60000000)
 




