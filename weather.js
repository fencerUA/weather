function weather(){
   // API ключ
    let apiKey = "8c827544d40c33f384f5c024e6aaa99f";
    // Город погода которого нужна
    let city = document.querySelector('#cityName').value;;
    // Формируем url для GET запроса
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
    // Отправляем запрос
    axios.get(url).then(res => {
        // Выводим результат в консоль браузера
        if(res.data){
            console.log(res.data);
            let cityName = res.data.name;
            let temp = res.data.main.temp;
            let humidity = res.data.main.humidity;
            let wind = res.data.wind.speed;
            let weather = res.data.weather[0].description;
            

            let div = document.createElement('div');
            div.innerHTML = `
            <h2>Погода в місті ${cityName}</h2>
            <p>Температура: ${temp}</p>
            <p>Вологість: ${humidity}</p>
            <p>Швидкість вітру: ${wind}</p>
            <p>Погода: ${weather}
            `;
            document.body.appendChild(div);
        }
    })
}

    

