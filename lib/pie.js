Raphael.fn.pieChart = function (cx, cy, minR, maxR, values, labels, stroke) {
    var paper = this,
        rad = Math.PI / 180,
        chart = this.set();
    function sector(cx, cy, r, startAngle, endAngle, params) {
        var x1 = cx + r * Math.cos(-startAngle * rad),
            x2 = cx + r * Math.cos(-endAngle * rad),
            y1 = cy + r * Math.sin(-startAngle * rad),
            y2 = cy + r * Math.sin(-endAngle * rad);
        return paper.path(["M", cx, cy, "L", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, "z"]).attr(params);
    }
    var angle = 20,
        total = 0,
        start = 0,
        disRadius = maxR - minR;
        process = function (j) {
            var value = values[j],
                angleplus = 360 * value / total,
                popangle = angle + (angleplus / 2),
                color = Raphael.hsb(start, .75, 1),
                ms = 500,
                delta = 30,
                r = minR + disRadius * value / total,
                bcolor = Raphael.hsb(start, 1, 1),
                p = sector(cx, cy, r, angle, angle + angleplus, {fill: "90-" + bcolor + "-" + color, stroke: stroke, "stroke-width": 3}),
                txt,
                tx,
                ty,
                mx,
                my,
                textWidth,
                isLeft,
                line;
                // TODO: limit the max area of text
                tx = cx + (r + delta + 55) * Math.cos(-popangle * rad);
                ty = cy + (r + delta + 25) * Math.sin(-popangle * rad);
                mx = cx + (r - 3) * Math.cos(-popangle * rad);
                my = cy + (r - 3) * Math.sin(-popangle * rad);
                textWidth = labels[j].length * 12;
                if(mx >= cx) {
                    while((tx - textWidth/2) < mx) {
                        tx += delta;
                    }
                    isLeft = false;
                } else {
                    while((tx + textWidth/2) > mx) {
                        tx -= delta;
                    }
                    isLeft = true;
                }
                text = paper.text(tx, ty, labels[j]).attr({fill: "#ccc", stroke: "none", "font-size": 20}),
                line = paper.path(["M",mx , my ,
                                    "L", isLeft?(tx + textWidth/2):(tx - textWidth/2), ty + 14,
                                    "L", isLeft?(tx - textWidth/2):(tx + textWidth/2), ty + 14]).attr({stroke: bcolor, "stroke-width": 1 });
            angle += angleplus;
            chart.push(p);
            chart.push(txt);
            chart.push(line);
            start += .1;
        };
    for (var i = 0, ii = values.length; i < ii; i++) {
        total += values[i];
    }
    for (i = 0; i < ii; i++) {
        process(i);
    }
    return chart;
};

$(function () {
    var values = [],
        labels = [];
    $("tr").each(function () {
        values.push(parseInt($("td", this).text(), 10));
        labels.push($("th", this).text());
    });
    $("table").hide();
    Raphael("holder", 700, 700).pieChart(350, 350, 150, 200, values, labels, "#fff");
});