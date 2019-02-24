var current_head = {};
var canvas = $("#canvas");
var data = [{x: 10, y: 20}, {x:40, y: 60}];
const x_axis_ticks = 50;
const y_axis_ticks = 35;

$(document).ready( function() {
    var width = canvas.width();
    var height = canvas.height();
    
    current_head = {x: width/2, y: 0};
    draw_circle("red", true);
});

$(document).on("keyup", null, function(e) {
    if (e.which == 37 || e.which == 65) {
        draw_line({x: current_head["x"] - canvas.width()/x_axis_ticks, y: current_head["y"]});
    } else if (e.which == 39 || e.which == 68) {
        draw_line({x: current_head["x"] + canvas.width()/x_axis_ticks, y: current_head["y"]});
    } else if (e.which == 40 || e.which == 83) {
        draw_line({x: current_head["x"], y: current_head["y"] + canvas.height()/y_axis_ticks});
    }
    //Check if there's a active analysis of a person and if there is draw a special circle at current area.
    //Currently it is random
});

function make_x_gridlines(x) {		
    return d3.axisBottom(x)
        .ticks(5)
}

function make_y_gridlines(y) {		
    return d3.axisLeft(y)
        .ticks(5)
}

function draw_line(e) {
    delete_circle("head");
    var vis = d3.select("svg");
    var line = vis.append("line")
        .attr("x1", current_head["x"])
        .attr("y1", current_head["y"])
        .attr("x2", e["x"])
        .attr("y2", e["y"])
        .attr("stroke", 'green');
    current_head = {x: e["x"], y: e["y"]};
    draw_circle("red", true);
}

function delete_circle(id) {
    d3.select("svg").select("#" + id).remove();
}

function draw_circle(color, head) {
    var vis = d3.select("svg");
    var line = vis.append("circle")
        .attr("cx", current_head["x"])
        .attr("cy", current_head["y"])
        .attr("r", 10)
        .attr("stroke", color)
        .attr("fill", "none");
    
    if (head) {

        line.attr("id", "head");
    }
}