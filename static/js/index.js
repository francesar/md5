var current_head = {};
var canvas = $("#canvas");
var data = [{x: 10, y: 20}, {x:40, y: 60}];
const x_axis_ticks = 50;
const y_axis_ticks = 35;

let wermIDs = 1;
let selectedWorm;

const oldColor = "#212529";
const newColor = 'rgb(50, 52, 56)';

$(document).ready( function() {
    var width = canvas.width();
    var height = canvas.height();
    
    current_head = {x: width/2, y: 0};
    selectedWorm = 1;

    getWermIDs()
        .then(werms => {
            wermIDs = werms;
        });
    draw_circle("red", true);
});

function highlightWormRow(newID) {
    let oldRowID = $("#werm-tbody").children()[Number(selectedWorm) - 1].id;
    $(`#${oldRowID}`).css('background-color', oldColor);
    
    let selectedRow = $("#werm-tbody").children()[Number(newID) - 1].id;
    $(`#${newID}`).css('background-color', newColor);

    selectedWorm = selectedRow;

}

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
}

function getWermIDs() {
    return axios.get("/werms")
        .then(res => {
            return res.data.werms; 
        });
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