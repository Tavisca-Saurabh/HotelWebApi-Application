var isTrue = false;
var GetAllHotels = () => {

    HotelAllAjaxCall()
}

var HotelAllAjaxCall = () => {
    var server = "/api/hotel/get/";
    $.ajax({
        url: server,
        type: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        success: function (result) {
            console.log("success");
            console.log(result);
        },
        error: function (reason) {
            console.log("had a failure");
            console.log(reason);
        }
    }).done((response) => {
        if (isTrue === false) {
            response.forEach((hotel) => {
                var SaveId = "Save" + hotel.Id;
                $("#hotelsDiv").append("<p>" + hotel.Name + "</p>");
                $("#hotelsDiv").append("<button id ="+ hotel.Id + ">Book</button>");
                $("#hotelsDiv").append("<button id =" + SaveId + ">Save</button>");

                document.getElementById(hotel.Id).addEventListener("click", () => {
                    BookHotelAjaxCall(hotel.Id);
                });
                document.getElementById(SaveId).addEventListener("click", () => {
                    SaveHotelAjaxCall(hotel.Id);
                });
                isTrue = true;
            });
        }
    });
};

var BookHotelAjaxCall = (id) => {
    var server = "/api/hotel/book/" + id;
    $.ajax({
        url: server,
        type: 'PUT',
        contentType: 'application/json',
        dataType: 'json',
        success: function (result) {
            console.log("success");
            console.log(result);
        },
        error: function (reason) {
            console.log("had a failure");
            console.log(reason);
        }
    }).done((response) => { alert("Booked Successfully"); });
};

var SaveHotelAjaxCall = (id) => {
    var server = "/api/hotel/save/" + id;
    $.ajax({
        url: server,
        type: 'PUT',
        contentType: 'application/json',
        dataType: 'json',
        success: function (result) {
            console.log("success");
            console.log(result);
        },
        error: function (reason) {
            console.log("had a failure");
            console.log(reason);
        }
    }).done((response) => { alert("Saved Successfully"); });
};
