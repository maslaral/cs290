var key = "361c89bbebda56f72259dce52cf18412";

document
  .querySelector("#submitGet")
  .addEventListener("click", function(element) {
    var city = document.querySelector("#city").value;
    var country = document.querySelector("#country").value;
    var unit = document.querySelector('input[name="unit"]:checked').value;
    var url = "";

    if (country === "") {
      url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`;
    } else {
      url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${unit}&appid=${key}`;
    }

    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.send();

    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText).main;

        document.querySelector("#temp").textContent = response.temp;
        document.querySelector("#tempMin").textContent = response.temp_min;
        document.querySelector("#tempMax").textContent = response.temp_max;
        document.querySelector("#pressure").textContent = response.pressure;
        document.querySelector("#humidity").textContent = response.humidity;
      }
    };

    element.preventDefault();
  });

document
  .querySelector("#submitPost")
  .addEventListener("click", function(event) {
    var input = document.querySelector("#postText").value;
    var url = "http://httpbin.org/post";

    var req = new XMLHttpRequest();
    var payload = { postText: null };
    payload.postText = input;
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load", function() {
      if (req.status >= 200 && req.status < 400) {
        var response = JSON.parse(req.responseText);
        document.querySelector("#postedText").textContent =
          response.json.postText;
      } else {
        console.log("Error: " + req.statusText);
      }
    });
    req.send(JSON.stringify(payload));
    event.preventDefault();
  });
