//  let key="db3ec84ba9f9bf83be704de07e49bc6a"

//  let url="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
// https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=db3ec84ba9f9bf83be704de07e49bc6a"

 let input=document.getElementById("location")
 let button=document.getElementById("btn")
 let temparature=document.getElementById("temp_num")
 let humidity=document.getElementById("humi_num")
 let description=document.getElementById("description")
 let image=document.querySelector("img")
 console.log(input);
 console.log(button);
 console.log(temparature);
 console.log(humidity);
console.log(image);
 let checkWeatherDetails=async(city)=>{
    let key="db3ec84ba9f9bf83be704de07e49bc6a"
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    let weather1 =await fetch(url)
    let weather2=await weather1.json()
    console.log(weather2);
    // console.log(weather2.main.temp);
    console.log(weather2.main.humidity);
    console.log(weather2.weather[0].main);
    description.innerHTML=`${weather2.weather[0].main}`
        
        let celsius=Math.round(weather2.main.temp-273)
     temparature.innerHTML=`${celsius}<sup>o</sup>C`
     console.log(celsius);
     humidity.innerHTML=`${weather2.main.humidity}%`
     switch (weather2.weather[0].main) {
        case "Haze":
            image.src="./Haze.png"
            break;
            case "Cloudy":
                image.src="./cloudy.png"
                break;
                case "Rainy":
                    image.src="./Rainy.png"
                    break
                    case "Snow":
                        image.src="./snow.png"
           break
        default:
            image.src="./clear.png"
            break;
     }
 }
    btn.addEventListener("click",()=>{
        checkWeatherDetails(input.value)
    })
