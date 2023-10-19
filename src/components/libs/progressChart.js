export function progress(value, id, color, options) {
    const  d3  = window.d3;
    var percent = value;

    const w = options[0].w,
        h = options[0].h;

    const outerRadius = w / 2;
    const innerRadius = options[0].innerRadius

    d3.select(id).select("svg").remove();

    // const color = [color, "#6DD4B1", "#4D71EC","#FFFFFF"];

    const arc = d3.svg
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(0)
        .endAngle(2 * Math.PI);

    const arcLine = d3.svg
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .cornerRadius(20)
        .startAngle(-0.05);

    const svg = d3
        .select(id)
        .append("svg")
        .attr({
            width: w,
            height: h,
        })
        .append("g")
        .attr({
            transform: "translate(" + w / 2 + "," + h / 2 + ")",
        });

    const defs = svg.append("svg:defs");

    const gradient = defs.append("linearGradient")
        .attr("id", "svgGradient" + id)
        .attr("x1", "0%")
        .attr("x2", "100%")
        .attr("y1", "0%")
        .attr("y2", "100%");
        gradient.append("stop")
        .attr('class', 'start')
        .attr("offset", "0%")
        .attr("stop-color", color[2])
        .attr("stop-opacity", 1);
        gradient.append("stop")
        .attr('class', 'end')
        .attr("offset", "100%")
        .attr("stop-color", color[1])
        .attr("stop-opacity", 1);

    const inset_shadow = defs.append("svg:filter").attr("id", "inset-shadow" + id);

    inset_shadow.append("svg:feOffset").attr({
        dx: 0,
        dy: 0,
    });

    inset_shadow.append("svg:feGaussianBlur").attr({
        stdDeviation: 4,
        result: "offset-blur",
    });

    inset_shadow.append("svg:feComposite").attr({
        operator: "out",
        in: "SourceGraphic",
        in2: "offset-blur",
        result: "inverse",
    });

    inset_shadow.append("svg:feComposite").attr({
        operator: "in",
        in: "color",
        in2: "inverse",
        result: "shadow",
    });

    inset_shadow.append("svg:feComposite").attr({
        operator: "over",
        in: "shadow",
        in2: "SourceGraphic",
    });
    const pathForeground = svg
        .append("path")
        .datum({ endAngle: 0 })
        .attr({
            d: arcLine,
        })
        .style({
            fill: "url(#svgGradient"+id+")",
            // fill: color[1],
            filter: "url(#inset-shadow"+id+")",
        });

    const middleCount = svg
        .append("text")
        .datum(0)
        .text(function (d) {
            return d + "%";
        })

        .attr({
            class: "middleText",
            "text-anchor": "middle",
            dy: 1,
        })
        .style({
            fill: "#4D4F5C",
            "font-size": options[0].fontsize1 ? options[0].fontsize1 : "26px",
            "font-weight": "700",
        });
    const middleCount2 = svg
        .append("text")
        .datum(0)
        .text(function (d) {
            return d + "%";
        })

        .attr({
            class: "middleText",
            "text-anchor": "middle",
            dy: options[0].dy ? options[0].dy : 25,
        })
        .style({
            fill: "#4D4F5C",
            "font-size": options[0].fontsize2 ? options[0].fontsize2 : "14px",
        });

    var oldValue = 0;
    const arcTween = function (transition, newValue, oldValue) {
        transition.attrTween("d", function (d) {
            const interpolate = d3.interpolate(
                d.endAngle,
                2 * Math.PI * (newValue / 100)
            );

            const interpolateCount = d3.interpolate(oldValue, newValue);
            return function (t) {
                d.endAngle = interpolate(t);
                middleCount.text(Math.floor(interpolateCount(t)) + "%");
                middleCount2.text(options[0].text ? options[0].text : "Rendimiento");
                return arcLine(d);
            };
        });
    };

    const animate = function () {
        pathForeground
            .transition()
            .duration(750)
            .ease("cubic")
            .call(arcTween, percent, oldValue);
        oldValue = percent;
        percent = oldValue;
        setTimeout(animate, 3000);
    };

    setTimeout(animate, 0);
}


