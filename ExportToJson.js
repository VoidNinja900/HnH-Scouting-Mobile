
function handleSubmit(event) {
    event.preventDefault();
  

    //data
    const data = new FormData(event.target);
  
    const TeamNumber = data.get('Team#');
    const MatchNumber = data.get('Match#');

    // const CubesConesBoth = data.get('CubesConesBoth');
    // const Nodes = data.get('Nodes');
    // const Gyro = data.get('Gyro');

    // const StartingPosition = data.get('StartingPosition');

    // const Docked = data.get('Docked');

    // const AutoCubePoints = data.get('Cube Points');
    // const AutoConePoints = data.get('Cone Points');

    // const AutoFouls = data.get('Fouls');
    // const AutoTotalPoints = data.get('Auto Total Points');

    // const TeleopCubePoints = data.get('Teleop Cube Points');
    // const TeleopConePoints = data.get('Teleop Cone Points');

    // const TeleopFouls = data.get('Teleop Fouls');
    // const TeleopTotalPoints = data.get('Teleop Total Points');

    




    const value2 = Object.fromEntries(data.entries())


    // Convert Data to json
    data2 = JSON.stringify(value2);


    //Log values for debug
    console.log(JSON.stringify(value2));


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
