function requestUnicorn() {
    $.ajax({
        method: 'POST',
        url: 'https://n4li2d1jvk.execute-api.ap-south-1.amazonaws.com/Prod/ride',
        headers: {
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