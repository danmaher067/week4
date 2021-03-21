
d3.csv('powerproduction.csv', function (data) {

  // Variables
  var body = d3.select('body')
	var margin = { top: 60, right: 150 ,bottom: 80, left: 150 }
	var h = 380+margin.top - margin.bottom
	var w = 600+margin.left - margin.right
	//var formatPercent = d3.format('%')
	// Scales
  var colorScale = d3.scale.category20()
  var xScale = d3.scale.linear()
    .domain([
    	d3.min([0,d3.min(data,function (d) { return d.speed })]),
    	d3.max([0,d3.max(data,function (d) { return d.speed * 1.1 })])
    	])
    .range([0,w])
  var yScale = d3.scale.linear()
    .domain([
    	d3.min([0,d3.min(data,function (d) { return d.power})]),
    	d3.max([0,d3.max(data,function (d) { return d.power })])
    	])
    .range([h,0])
	// SVG
	var svg = body.append('svg')
	    .attr('height',h + margin.top + margin.bottom)
	    .attr('width',w + margin.left + margin.right)
	  .append('g')
	    .attr('transform','translate(' + margin.left + ',' + margin.top + ')')
	// X-axis
	var xAxis = d3.svg.axis()
	  .scale(xScale)
	  //.tickFormat(formatPercent)
	  .ticks(7)
	  .orient('bottom')
  // Y-axis
	var yAxis = d3.svg.axis()
	  .scale(yScale)
	  //.tickFormat(formatPercent)
	  .ticks(7)
	  .orient('left')
  // Circles
  var circles = svg.selectAll('circle')
      .data(data)
      .enter()
    .append('circle')
      .attr('cx',function (d) { return xScale(d.speed) })
      .attr('cy',function (d) { return yScale(d.power) })
      .attr('r','3')
      .attr('stroke','black')
      .attr('stroke-width',1)
      .attr('fill',function (d,i) { return colorScale(i) })
      .on('mouseover', function () {
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r',20)
          .attr('stroke-width',3)
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r',10)
          .attr('stroke-width',1)
      })
    .append('title') // Tooltip
.text(function (d) { return '\nPower: ' + d.power +'\nSpeed: ' + d.speed })
  // X-axis
  svg.append('g')
      .attr('class','axis')
      .attr('transform', 'translate(0,' + h + ')')
      .call(xAxis)
    .append('text') // X-axis Label
      .attr('class','label')
      .attr('y',50)
      .attr('x',w-250)
      .attr('dy','.71em')
      .style('text-anchor','end')
      .text('speed (KM/H)')
  // Y-axis
  svg.append('g')
      .attr('class', 'axis')
      .call(yAxis)
    .append('text') // y-axis Label
      .attr('class','label')
      .attr('transform','rotate(-90)')
      .attr('x',-200)
      .attr('y',-100)
      .attr('dy','.71em')
      .style('text-anchor','center')
      .text('power (W)')
})