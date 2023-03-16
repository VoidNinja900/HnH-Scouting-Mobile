
function handleSubmit(event) {
    event.preventDefault();
  

    //Data
    const data = new FormData(event.target);
  
    const TeamNumber = data.get('Team#');
    const MatchNumber = data.get('Match#');
    const CubesConesBoth = data.get('CubesConesBoth');
    const Nodes = data.get('Nodes');
    const Wieght = data.get('Wieght');
    const Speed = data.get('Speed');
    const Gyro = data.get('Gyro');
    const StartingPosition = data.get('StartingPosition');
    const Docked = data.get('Docked');
    const CubePoints = data.get('Cube Points');
    const Fouls = data.get('Fouls');
    const TotalPoints = data.get('Total Points');


    const value2 = Object.fromEntries(data.entries())


    // Convert Data to json
    data2 = JSON.stringify(value2);


    //Log values for debug
    console.log({ TeamNumber, MatchNumber, CubesConesBoth, Nodes, Wieght, Speed, Gyro, StartingPosition, Docked, CubePoints, Fouls, TotalPoints });


    //Create file to download
    filename = TeamNumber+"-"+MatchNumber+".json"
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(data2));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  

    //download file
    element.click();
  
    document.body.removeChild(element);
    
    
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
