const city = 'lviv'
const apiKey = '5d066958a60d315387d9492393935c19'

const run = () => {
	$.ajax({
		url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`,
		method: 'GET',
		success: function (data) {
			$('.weatherIcon').attr('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
			$('.city').text(data.name)
			$('.temp').text(`${data.main.temp}\u00B0C`)
			$('.preasure').text(data.main.pressure)
			$('.description').text(data.weather[0].description)
			$('.humidity').text(data.main.humidity)
			$('.speed').text(data.wind.speed)
			$('.deg').text(`${data.wind.deg}\u00B0`)

			setTimeout(() => run(city), 15000);
		},
		error: function (error) {
			console.log(error)
		}
	})
}

run()