import { writeFile } from 'fs';
function handleSubmit(event) {
    event.preventDefault();
    
    
  
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

    data2 = JSON.stringify(value2);

    console.log({ TeamNumber, MatchNumber, CubesConesBoth, Nodes, Wieght, Speed, Gyro, StartingPosition, Docked, CubePoints, Fouls, TotalPoints });

    writeFile('afile' + "1" + ".json", data2, function (err) {
        if (err) throw err;
        console.log('Saved!');
    }  )
    
    
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);