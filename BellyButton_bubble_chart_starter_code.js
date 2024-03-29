// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot(); 

    // 1. Create the trace for the bubble chart.
    var bubbleData = [
      x : id,
      y : values,      
      text : labels,    
      mode : 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'vivid',
      }   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Top 10 Bacteria Cultures Found",
      x: {title: "OTU Ids"},
      y: {tilte: "Sample values"}
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
  });
}
