// function tampilkanSemuaMenu(){

//     $.getJSON('../data/menu.json', function (data) {
//         let menu = data.menu;
//         let content = '';
//         // if($('.sort').on('click') == true){
//         // menu.sort(function(a, b){
//         //         return sortalphabet(a.nama, b.nama);
//         //         return a.harga - b.harga;
//         // });

//         // }
//         $.each(menu, function (i, data) {
//             content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
//             // $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>');
//         })

//         $('#daftar-menu').html(content);
//     });
// }

// tampilkanSemuaMenu();

// $('.pilihan-menu-item').on('click', function (){
//     $('.pilihan-menu-item').removeClass('active');
//     $(this).addClass('active');

//     let kategori = $(this).html();
//     $('h1').html(kategori);

//     if (kategori == 'All Menu') {
//         tampilkanSemuaMenu();
//         return;
//     }

//     $.getJSON('../data/menu.json', function (data){
//         let menu = data.menu;
//         let content = '';
//         // menu.sort(function(a, b){
//         //     return sortalphabet(a.nama, b.nama);
//         //     return a.harga - b.harga;
//         // });

//         $.each(menu, function (i, data){
//             if (data.kategori == kategori.toLowerCase()) {
//                 content += '<div class="col-md-6"><div class="card mb-2"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
//             }
//         });

//         $('#daftar-menu').html(content);
//     });

// });

// $('#sortaz').on('click', function (){

//     let kategori = $(this).html();
//     $('button').html('SORT A-Z');

//     // if (kategori == 'All Menu') {
//     //     tampilkanSemuaMenu();
//     //     return;
//     // }

//     $.getJSON('../data/menu.json', function (data){
//         let menu = data.menu;
//         let content = '';
//         menu.sort(function(a, b){
//             return sortalphabet(a.nama, b.nama);
//             // return a.harga - b.harga;
//         });

//         $.each(menu, function (i, data){
//             if (data.kategori == kategori.toLowerCase()) {
//                 content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
//             } else {
//                 content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
//             }
//         });
//         $('#daftar-menu').html(content);
//     });

// });

// $('#sortza').on('click', function (){

//     let kategori = $(this).html();
//     // $('h1').html(kategori);
//     $('button').html('SORT Z-A');

//     // if (kategori == 'All Menu') {
//     //     tampilkanSemuaMenu();
//     //     return;
//     // }

//     $.getJSON('../data/menu.json', function (data){
//         let menu = data.menu;
//         let content = '';
//         menu.sort(function(a, b){
//             return sortalphabetmundur(b.nama, a.nama);
//             // return b.harga - a.harga;
//         });

//         $.each(menu, function (i, data){
//             if (data.kategori == kategori.toLowerCase()) {
//                 content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
//             } else {
//                 content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
//             }
//         });
//         $('#daftar-menu').html(content);
//     });

// });

// $('#sorttinggi').on('click', function (){

//     let kategori = $(this).html();
//     $('button').html('HARGA TINGGI KE RENDAH');
//     // $('h1').html(kategori);

//     // if (kategori == 'All Menu') {
//     //     tampilkanSemuaMenu();
//     //     return;
//     // }

//     $.getJSON('../data/menu.json', function (data){
//         let menu = data.menu;
//         let content = '';
//         // menu.sort(function(a, b){
//         //     return sortharga(a.harga, b.harga);
//         //     return a.harga - b.harga;
//         // });
//         menu.sort(function(a, b){
//             return b.harga - a.harga}
//             );

//         $.each(menu, function (i, data){
//             if (data.kategori == kategori.toLowerCase()) {
//                 content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
//             } else {
//                 content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
//             }
//         });
//         $('#daftar-menu').html(content);
//     });

// });

// $('#sortrendah').on('click', function (){

//     let kategori = $(this).html();
//     $('button').html('HARGA RENDAH KE TINGGI');
//     // $('h1').html(kategori);

//     // if (kategori == 'All Menu') {
//     //     tampilkanSemuaMenu();
//     //     return;
//     // }

//     $.getJSON('../data/menu.json', function (data){
//         let menu = data.menu;
//         let content = '';
//         // menu.sort(function(a, b){
//         //     return sortharga(a.harga, b.harga);
//         //     return a.harga - b.harga;
//         // });
//         menu.sort(function(a, b){
//             return a.harga - b.harga}
//             );

//         $.each(menu, function (i, data){
//             if (data.kategori == kategori.toLowerCase()) {
//                 content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
//             } else {
//                 content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="../assets/food/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title"> '+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
//             }
//         });
//         $('#daftar-menu').html(content);
//     });

// });



// function sortalphabet(a, b){
//     a = a.toLowerCase();
//     b = b.toLowerCase();

//     return (a < b) ? -1 : (a > b) ? 1 : 0;
// }

// function sortalphabetmundur(a, b){
//     a = a.toLowerCase();
//     b = b.toLowerCase();

//     return (a > b) ? 1 : (a < b) ? -1 : 0;
// }

// function sortharga(a, b){
//     a = a.toLowerCase();
//     b = b.toLowerCase();

//    return (a < b) ? -1 : (a > b) ? 1 : 0;
// }

function displayAllMenu(){
    $.getJSON("../data/menu.json", function(result){
        var menu = result.menu;
        $.each(menu,function(i, data){
            $('#menu-list').append('<div class="col-md-4 mb-4"><div class="card"><img src="../assets/food/'+data.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+data.name+'</h5><p class="card-text">'+data.description+'</p><h5 class="card-title">Rp. '+data.price+'</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>');
        });
    });
}

function SortMenu(command="asc"){
    return function MenuSort(a,b){
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();
        var compare = 0;
        if (nameA > nameB){
            compare = 1;
        } else if (nameA < nameB){
            compare = -1;
        }
        return (command == "desc" ? compare * -1 : compare);
    }
}

function SortPrice(command="asc"){
    return function PriceSort(a,b){
        var priceA = a.price;
        var priceB = b.price;
        var compare = 0;
        if (priceA > priceB){
            compare = 1;
        }else if(priceA < priceB){
            compare = -1;
        }
        return (command == "desc" ? compare * -1 : compare);
    }
}
var menus = [];

$.getJSON('../data/menu.json',function(results){
    var menu = results.menu;
    $.each(menu,function(i,data){
        menus.push(data);
    });
});

displayAllMenu();

$('.pilihan-menu-item').on('click',function(){
    $('.pilihan-menu-item').removeClass('active');
    $(this).addClass("active");
    $('button').text("Select to sort the content ");
    $('.dropdown-item').removeClass('active');
    var category = $.trim($(this).text());
    $('h1').html(category);
    if (category == "All Menu"){
        displayAllMenu();
    }
    $.getJSON("../data/menu.json",function(result){
        var menu = result.menu;
        var content = "";
        $.each(menu, function(i, data){
            if (data.category == category){
                content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/food/'+data.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+data.name+'</h5><p class="card-text">'+data.description+'</p><h5 class="card-title">Rp. '+data.price+'</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>';
            }else if (category == "All Menu"){
                $.getJSON("../data/menu.json", function(result){
                    var menu = result.menu;
                    $.each(menu,function(i, data){
                        $('#menu-list').append('<div class="col-md-4 mb-4"><div class="card"><img src="../assets/food/'+data.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+data.name+'</h5><p class="card-text">'+data.description+'</p><h5 class="card-title">Rp. '+data.price+'</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>');
                    });
                });
                return false;
            }
        });
        $('#menu-list').html(content);
    });
});

$('.dropdown-menu a').on('click',function(){
    var tempmenu = [];
    var content = "";
    $('button').text($(this).text());
    $('.dropdown-item').removeClass('active');
    $(this).addClass('active');
    var category = $("h1").text();
    for (var i = 0; i < menus.length; i ++){
        if (menus[i].category == category){
            tempmenu.push(menus[i]);
        }else if (category == "All Menu"){
            tempmenu.push(menus[i]);
        }
    }
    var sort = $(this).text().toLowerCase();
    if (sort == "nama a-z"){
        tempmenu = tempmenu.sort(SortMenu("asc"));
        $.each(tempmenu, function(z, tempmenus){
            content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/food/'+tempmenus.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+tempmenus.name+'</h5><p class="card-text">'+tempmenus.description+'</p><h5 class="card-title">Rp. '+tempmenus.price+'</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>';
        })
    }else if (sort == "nama z-a"){
        tempmenu = tempmenu.sort(SortMenu("desc"));
        $.each(tempmenu, function(z, tempmenus){
            content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/food/'+tempmenus.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+tempmenus.name+'</h5><p class="card-text">'+tempmenus.description+'</p><h5 class="card-title">Rp. '+tempmenus.price+'</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>';
        })
    }else if (sort == "harga termurah"){
        tempmenu = tempmenu.sort(SortPrice('asc'));
        $.each(tempmenu, function(z, tempmenus){
            content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/food/'+tempmenus.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+tempmenus.name+'</h5><p class="card-text">'+tempmenus.description+'</p><h5 class="card-title">Rp. '+tempmenus.price+'</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>';
        })
    }else if (sort == "harga termahal"){
        tempmenu = tempmenu.sort(SortPrice("desc"));
        $.each(tempmenu, function(z, tempmenus){
            content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/food/'+tempmenus.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+tempmenus.name+'</h5><p class="card-text">'+tempmenus.description+'</p><h5 class="card-title">Rp. '+tempmenus.price+'</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>';
        })
    }
    $('#menu-list').html(content);
});