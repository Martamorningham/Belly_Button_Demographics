// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var metadata = data.metadata;
    // Create a variable that filters the samples for the object with the desired sample number.
    var metadataArray = metadata.filter(sampleObj => sampleObj.id == sample);
    
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadataresult = metadataArray[0];
    // Create a variable that holds the first sample in the array.
  

    // 2. Create a variable that holds the first sample in the metadata array.
    var metadataresult = metadataArray[0];  

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids_hold = otu_ids
    var otu_labels_hold
    var sample_values_hold

    // 3. Create a variable that holds the washing frequency.
    var wash_freq = parseFloat(results_1.wfreq);
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      var gaugeData = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: metafreq,
        title: { text: "Frequency of Belly-Button Washings Per Week" },
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          axis: { range: [null, 500] },
          steps: [
            { range: [0, 200], color: "red" },
            { range: [200, 400], color: "orange" },
            { range: [400, 600], color: "yellow" },
            { range: [600, 800], color: "green" },
            { range: [800, 1000], color: "blue" },
          ],
          }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      var gauge_layout = { width: 575, height: 500, margin: { t: 0, b: 0 }
    };
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot('gauge', gauge_data, gauge_layout);
  });
}
