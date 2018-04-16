$(document).ready(onReady);

let clickTotal = 0;

function onReady (){
    console.log( 'jquery has been loaded' );
    $('#addEmployeeButton').on('click', clickHandler);
}



function clickHandler() {
    console.log('counter button was clicked');
    clickTotal += Number($('#annualSalary').val()) /12;
    console.log( clickTotal );
    addNewEmployee();
    updateTotal();
    exceedMonthly();
    $("#firstName").val(" ");
}

function addNewEmployee(){
    console.log('in addNewEmployee');
    $('#employeeList').append(
        '<tr>' +
        '<td>' +$('#firstName').val () + '</td>' +
        '<td>' +$('#lastName').val() + '</td>' +
        '<td>' +$('#id').val() + '</td>' +
        '<td>' +$('#title').val() + '</td>' +
        '<td>' +$('#annualSalary').val() + '</td>' +
        '</tr>'
    );
}

function updateTotal(){
    $('#totalDiv').text( clickTotal );
}

function exceedMonthly(){
    if( clickTotal >= 20000 ){
        console.log( 'exceeded 20000' );
        $('#totalDiv').css("background-color","rgb(230,150,140");
    }
}

