
const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const temp_status=document.getElementById('temp_status');
const temp = document.getElementById('temp');


const getInfo = async (event) => {
    event.preventDefault()
    let cityVal = cityName.value;

    if (cityVal == "") {
        city_name.innerText = `Please Write the NAME before Search...`
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e328e629712ea1c34707313914024516`
            let response = await fetch(url);
            let data= await response.json()
            let arrdata=[data]
            console.log(arrdata)
            
            temp.innerText=arrdata[0].main.temp;
            city_name.innerHTML=`${arrdata[0].name}, ${arrdata[0].sys.country}`

            const tempMode=arrdata[0].weather[0].main;
            if(tempMode=="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i>";
            }else if(tempMode=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
            }else if(tempMode==="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
            }else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
            }


        } catch { 
            city_name.innerText='Plz enter CITY NAME properly...'
        }
    }
}
submitBtn.addEventListener('click', getInfo)