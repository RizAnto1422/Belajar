
function DatadanHasil() { 
    $('#list-hasilnya').html('');
    
    $.ajax({
        url: 'http://api.agusadiyanto.net/halal/',
        type: 'get',
        dataType: 'json',
        data: {
            'menu':'nama_produk',
            'query': $('#input-tulis').val()
        },
        success: function(respon){
           
            if ( respon.status == "success"){
                let datahasil = respon.data;

                $.each(datahasil, function(i, data) {
                    $('#list-hasilnya').append(`
                    <div class="col-md-4">
                        <div class="card mt-4 mb-5" style="width: 18rem; ">
                            <div class="card-header text-center bg-success text-white">`+data.nama_produk+`</div>
                            <ul class="list-group list-group-flush ">
                                <li class="list-group-item text-center bg-secondary text-white border border-white">Nomer Sertifikat  <p class="mb-1 mt-1"><b>`+data.nomor_sertifikat+`</b></p></li>
                                <li class="list-group-item text-center bg-secondary text-white border border-white">Produsen  <p class="mb-1 mt-1"><b>`+data.nama_produsen+`</b></p></li>
                                <li class="list-group-item text-center bg-secondary text-white border border-white">Berlaku Hingga  <p class="mb-1 mt-1"><b>`+data.berlaku_hingga+`</b></p></li>
                            </ul>
                        </div>
                    </div>
                    `);
                });

                $('#input-tulis').val('');

            } else {
                $('#list-hasilnya').html('<i class="h2">Data Tidak Ada!</i>')

                $('#input-tulis').val('');
            }
           
            
        }
    });

}


$('#input-tombol').on('click', function () {
    DatadanHasil();
});

$('#input-tulis').on('keyup', function(e){
    if(e.which === 13) {
        DatadanHasil();
    }
});
