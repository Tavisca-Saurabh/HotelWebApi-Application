
Product = {};

var PostHotel = () => {
    var name = $("#name").val();
    var price = $("#price").val();
    var address = $("#address").val();
    var starRating = $("#starRating").val();

    Product.Name = name;
    Product.Price = price;
    Product.Address = address;
    Product.StarRating = starRating;

    ajaxCall(Product);
};

var appendData = (response) => {
    $("#showResponse").append("<p>" + response.Name + "</p>")
}

var ajaxCall = (Product) => {

    $.ajax({
        url: "/api/hotel/add",
        data: JSON.stringify(Product),
        type: 'POST',
        contentType: 'application/json',
        //crossDomain: true,
        dataType: 'json',
        success: function (result) {
            console.log("success");
            console.log(result);
        },
        error: function (reason) {
            console.log("had a failure");
            console.log(reason);
        }
    }).done((response) => { appendData(response) });
};