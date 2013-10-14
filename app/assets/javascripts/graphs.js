
$(function(){
  graphs = [
  'upcoming',
  'sent',
  'response',
  'undelivered'
  ]

  createGraphs(graphs)

  function createGraphs(graphs){
    graphs.forEach(function (graph) {
      new Morris.Line({
        // ID of the element in which to draw the chart.
        element: graph+'_chart',
        data: $('#'+graph+'_chart').data(graph),
        // The name of the data record attribute that contains x-values.
        xkey: 'date',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['number_sent'],
        dateFormat: function(date) {
          d = new Date(date);
          return (d.getMonth()+1)+'/'+(d.getDate()+1)+'/'+d.getFullYear(); 
          },
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Messages Sent'],
        xLabelFormat: function(date) {
          return (date.getMonth()+1)+'/'+(date.getDate()+1)+'/'+date.getFullYear(); 
          },
        smooth: false,
      });
    })
  };
});