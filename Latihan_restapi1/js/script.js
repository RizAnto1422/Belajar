$.ajax({
    url: "https://kodepos-2d475.firebaseio.com/kota_kab/k69.json",
    type: "get",
    dataType: "json",
    data: {
        'apikey':'4u',
        'print' : 'pretty'
    },
    success: function(respon){
        // console.log(respon)
        {
            $.each(respon, function(i, data) {
                $('#list-daftar').append(`
                <tr class="table-active">
                    <td>`+data.kecamatan+`</td>
                    <td>`+data.kelurahan+`</td>
                    <td>`+data.kodepos+`</td>
                </tr>
                `);
            });
        }
    }
});