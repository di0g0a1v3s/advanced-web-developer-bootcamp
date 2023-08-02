d3.select("#new-note")
    .on('click', function() {
      d3.event.preventDefault();
      var input = d3.select('input');
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .text(input.property('value'));
      input.property('value', '');
      d3.select('.preview-note')
        .classed("hidden", true)
    });

d3.select("#remove-notes")
  .on('click', function() {
    d3.selectAll(".note")
      .remove()
  });

d3.select("#feeling-lucky")
  .on('click', function() {
    d3.selectAll(".note")
      .style("font-size", function() {
        return Math.random() * 30 + 'pt'
      })
  });

d3.select('input')
  .on('input', function(){
    let note = d3.event.target.value;
    console.log("qq")
    d3.select('.preview-note')
        .classed("hidden", note === "")
        .text(note);
  })