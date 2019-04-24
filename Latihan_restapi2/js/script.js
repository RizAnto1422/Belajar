
   
function HasildanData(){
        
        $('#list-hasilnya').html('');
        $('#list-hasil-kanan').html('');
       
       
        $.getJSON('https://muslimsalat.com/'+$('#input-tulis').val()+'/monthly.json?key=d6d72834969a40b43ca67405a8e9a1a8&jsoncallback=?', function (times)
        {
            let item = times.items;
            $.each(item, function ( i, data){
            $('#list-hasilnya').append(`
            <div class="list-group col-md-4 ml-5 mb-4 mt-4">
              <a type="text" class="list-group-item bg-info text-white text-center">
                <h3 class="mb-3 mt-2 text-capitalize">`+times.query+` <br> `+times.state+`</h3>
                <h5 class="mb-2">`+times.address+`  `+times.country+` <small>(`+times.country_code+`)</small> </h5>
              </a>
              <div type="text" class="list-group-item">
                <div class="row bg-light text-dark text-center">
                  <div class="col-md-6 brd">
                    <div class="center-block">Fajr</div>
                  </div>
                  <div class="col-md-6 brd overflow-auto">
                    <div class="">`+data.fajr+`</div>
                  </div>
                </div>
              </div>
              <div type="text" class="list-group-item">
                <div class="row bg-light text-dark text-center">
                  <div class="col-md-6 brd">
                    <div class="center-block">Shurooq</div>
                  </div>
                  <div class="col-md-6 brd overflow-auto">
                    <div class="">`+data.shurooq+`</div>
                  </div>
                </div>
              </div>
              <div type="text" class="list-group-item">
                <div class="row bg-light text-dark text-center ">
                  <div class="col-md-6 brd">
                    <div class="center-block">Dhuhr</div>
                  </div>
                  <div class="col-md-6 brd overflow-auto">
                    <div class="">`+data.dhuhr+`</div>
                  </div>
                </div>
              </div>
              <div type="text" class="list-group-item">
                <div class="row bg-light text-dark text-center">
                  <div class="col-md-6 brd">
                    <div class="center-block">Asr</div>
                  </div>
                  <div class="col-md-6 brd overflow-auto">
                    <div class="">`+data.asr+`</div>
                  </div>
                </div>
              </div>
              <div type="text" class="list-group-item">
                <div class="row bg-light text-dark text-center">
                  <div class="col-md-6 brd">
                    <div class="center-block">Maghrib</div>
                  </div>
                  <div class="col-md-6 brd overflow-auto">
                    <div class="">`+data.maghrib+`</div>
                  </div>
                </div>
              </div>
              <div type="text" class="list-group-item">
               <div class="row bg-light text-dark text-center">
                  <div class="col-md-6 brd">
                    <div class="center-block">Isha</div>
                  </div>
                  <div class="col-md-6 brd overflow-auto">
                    <div class="">`+data.isha+`</div>
                  </div>
                </div>
              </div>
              <a type="text" class="list-group-item bg-info text-white text-center">
                <h5 class="text-center">`+data.date_for+`</h5>
              </a>
            </div>
            `) 
        });
        $('#input-tulis').val('');
        });
  
        $.getJSON('https://muslimsalat.com/'+$('#input-tulis').val()+'/monthly.json?key=d6d72834969a40b43ca67405a8e9a1a8&jsoncallback=?', function (times)
            {
            let presure = times.today_weather.pressure;
            let suhu = times.today_weather.temperature;
            $('#list-hasil-kanan').append(`
            <div class="card mb-3 mr-5 mt-4">
                <img src="`+ times.map_image +`" class="card-img-top" alt="">
                <div class="card-body">
                  <h5 class="card-title text-center text-capitalize">`+times.query+` `+times.state+` <small> (`+times.country_code+`)</small> </h5>
                  <p class="card-text"><pre>
Qibla Direction on compass = `+times.qibla_direction+`<b>&deg;degree</b>
Tekanan Udara  = `+presure+` <b>mbar</b> 
Suhu Udara     = `+suhu+`<b>&deg;C</b> 
Lintang        = `+times.latitude+`
Bujur          = `+times.longitude+`<bt></pre>
                  </p>
                  <p class="card-text text-center"><small class="text-muted"><a href="`+times.link+` "target="_blank">`+times.link+`</a></small></p>
                  <p class="card-text text-center"><small class="text-muted"> &copy;copyright2019 @Rizal_R</small></p>
                </div>
            </div> 
            `)
      
          $('#input-tulis').val('');
        });
  
    
}
 
    


jQuery('#input-tombol').on('click', function() {   
  HasildanData();
});

$('#input-tulis').on('keyup', function(e){
  if(e.which === 13) {
    HasildanData();
  }
});



