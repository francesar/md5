
var current_head = {};
var canvas = $("#canvas");
var data = [{x: 10, y: 20}, {x:40, y: 60}, ];

$(document).ready( function() {
    
    var width = canvas.width();
    var height = canvas.height();
    current_head = {x: width/2, y: 0};
});

$(document).on("keyup", null, function(e) {
    if (e.which == 37 || e.which == 65) {
        draw({x: current_head["x"] - canvas.width()/50, y: current_head["y"]});
    } else if (e.which == 39 || e.which == 68) {
        draw({x: current_head["x"] + canvas.width()/50, y: current_head["y"]});
    } else if (e.which == 40 || e.which == 83) {
        draw({x: current_head["x"], y: current_head["y"] + canvas.height()/35});
    }
});

function draw(e) {
    var vis = d3.select("svg");
    var line = vis.append("line")
        .attr("x1", current_head["x"])
        .attr("y1", current_head["y"])
        .attr("x2", e["x"])
        .attr("y2", e["y"])
        .attr("stroke", 'green');
    current_head = {x: e["x"], y: e["y"]};
}