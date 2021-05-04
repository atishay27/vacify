function requestUnicorn() {
    $.ajax({
        method: 'POST',
        url: 'https://kwuk5atz5l.execute-api.ap-south-1.amazonaws.com/prod/ride',
        headers: {
            Authorization: false
        },
        data: JSON.stringify({
            PickupLocation: {
                Latitude: 12,
                Longitude: 77
            }
        }),
        contentType: 'application/json',
        success: completeRequest,
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
            console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
            console.error('Response: ', jqXHR.responseText);
            alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
        }
    });
}
function completeRequest(result) {
    console.log('Response received from API: ', result);
}