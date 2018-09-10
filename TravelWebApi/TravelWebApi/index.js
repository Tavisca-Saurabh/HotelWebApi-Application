
//User = {};

//var authenticate = () => {
//    var username = $("#username").val();
//    var password = $("#password").val();

//    User.UserName = username;
//    User.Password = password;

//    ajaxCall(User);
//};

//var appendData = (response) => {
//    $("#showResponse").append("<p>" + response.Id + "</p>")
//}

//var ajaxCall = (User) => {

//    $.ajax({
//        url: "/api/authenticate",
//        data: JSON.stringify(User),
//        type: 'POST',
//        contentType: 'application/json',
//        //crossDomain: true,
//        dataType: 'json',
//        success: function (result) {
//            if (result.username == "client") {
//                Console.log("Login done");
//            }
//            else {
//                Console.log("Admin done");
//            }
//        },
//        error: function (reason) {
//            console.log("had a failure");
//            console.log(reason);
//        }
//    }).done((response) => { appendData(response) });
//};


//var ajaxCall = (User) => {

//    $.ajax({
//        url: "/api/authenticate",
//        data: JSON.stringify(User),
//        type: 'POST',
//        contentType: 'application/json',
//        //crossDomain: true,
//        dataType: 'json',
//        async: false,
//        success: function (result) {
//            console.log("success");
//            console.log(result);
//        },
//        error: function (reason) {
//            console.log("had a failure");
//            console.log(reason);
//        }
//    }).done((response) => { appendData(response) });
//};

//var GetHotel = () => {
//    var id = $("#hotelId").val();
//    HotelAjaxCall(id)
//}

//var HotelAjaxCall = (id) => {
//    var server = "/api/hotel/get/" + id;
//    $.ajax({
//        url: server,
//        type: 'GET',
//        contentType: 'application/json',
//        dataType: 'json',
//        success: function (result) {
//            console.log("success");
//            console.log(result);
//        },
//        error: function (reason) {
//            console.log("had a failure");
//            console.log(reason);
//        }
//    }).done((response) => {
//        $("#hotelsDiv").append("<p>" + response.Name + "</p>")
//    });
//};


//var GetAllHotels = () => {

//    HotelAllAjaxCall()
//}

//var HotelAllAjaxCall = () => {
//    var server = "/api/hotel/get/";
//    $.ajax({
//        url: server,
//        type: 'GET',
//        contentType: 'application/json',
//        dataType: 'json',
//        success: function (result) {
//            console.log("success");
//            console.log(result);
//        },
//        error: function (reason) {
//            console.log("had a failure");
//            console.log(reason);
//        }
//    }).done((response) => {
//        response.forEach((hotel) => {
//            $("#hotelsDiv").append("<p>" + hotel.Name + "</p>")
//        });
//    });
//};

