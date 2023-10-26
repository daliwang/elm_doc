/*
$(document).ready(function() {
    var nodes = [];

    // Load JSON file
    $.getJSON('uelm_ref.json', function(data) {
        nodes = data.nodes.map(function(node) { return node.id; });
    });

    // Filter IDs based on user input
    $('#search').on('input', function() {
        var input = $(this).val();
        var filteredNodes = nodes.filter(function(node) {
            return node.startsWith(input);
        });

        // Update dropdown
        $('#dropdown').empty();
        filteredNodes.forEach(function(node) {
            $('#dropdown').append(new Option(node, node));
        });
    });
});

function submitForm() {
    var string = $('#string').val();
    $.ajax({
        url: '/double_string',
        data: JSON.stringify({ 'string': string }),
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        success: function(response) {
            $('#result').text(response.result);
        },
        error: function(error) {
            console.log(error);
        }
    });
}
*/

$(document).ready(function() {
    var nodes = [];

    // Load JSON file
    $.getJSON('uelm_ref.json', function(data) {
        nodes = data.nodes.map(function(node) { return node.id; });
    });

    // Filter IDs based on user input
    $('#search').on('input', function() {
        var input = $(this).val();
        var filteredNodes = nodes.filter(function(node) {
            return node.startsWith(input);
        });

        // Update dropdown
        $('#dropdown').empty();
        filteredNodes.forEach(function(node) {
            $('#dropdown').append(new Option(node, node));
        });
    });

    // Add submit event to form
    $('#form').on('submit', function(e) {
        e.preventDefault();
        submitForm();
    });
});

function submitForm() {

    var nodeId = $('#dropdown').val();
    $.ajax({
        url: '/cgi-bin/find_edges.py',
        data: JSON.stringify({ 'nodeId': nodeId }),
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        success: function(response) {
            $('#result').text(JSON.stringify(response));
        },
        error: function(error) {
            console.log(error);
        }
    });
/*
    $('#searchForm').on('submit', function(e) {
        e.preventDefault();
        var string = $('#dropdown').val();

        $.post("/CGI-Executables/find_edges.py", { 'string': string }, function(data) {
            $('#result').text(data);
        });
    });
*/
}


