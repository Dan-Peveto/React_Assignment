const mountains = [
    {
       "name": "Kilimanjaro",
       "height": "5895",
       "place": "Tanzania"

    },

    {
        "name": "Mount Fuji",
        "height": "12388",
        "place": "Japan"
 
     },

     {
        "name": "Danali",
        "height": "20310",
        "place": "United States"
 
     },

     {
        "name": "Mont Blanc",
        "height": "4805",
        "place": "France"
 
     },

     {
        "name": "Maclear' Beacon",
        "height": "3558",
        "place": "South Africa"
 
     }
]

function MountTable() {
    const tableRows = []
    for (let i = 0; i < mountains.length; i++) {
        const data = mountains[i];
        tableRows.push(
            <tr key={i}>
                <td>{data.name}</td>
                <td>{data.height}</td>
                <td>{data.place}</td>
            </tr>
        );
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Place</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    );
}

export default MountTable