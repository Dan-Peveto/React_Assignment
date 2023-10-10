
//fucntion to carry out fizzBuzz and return an array
function fizzBuzz() {
    var n = 0;
    var fizzArr = []
    while (n < 100) {
        n++
        if (n % 3 === 0 && n % 5 !==0) {
            fizzArr.push('fizz')
        } else if (n % 3 !== 0 && n % 5 === 0) {
            fizzArr.push('buzz')
        } else if (n % 3 === 0 && n % 5 === 0) {
            fizzArr.push('fizzBuzz')
        } else {
            fizzArr.push(n)
        }
    }
    return fizzArr;
}

const fizzArr = fizzBuzz()
// Funciton to take in fizzBuzz array and return table format
function makeFizzTable(arr) {
    const tableRows = [];
    for (var i = 0; i < arr.length; i+=10) {
        const row = arr.slice(i, i + 10);
        const tableData = row.map((value, index) => (
            <td key={index}>{value}</td>
        ));
        tableRows.push(
            <tr key={i}>
                {tableData}
            </tr>
        );
    }
    return (
        <table>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );
}
// calling fizzbuzz table
var fizzTable = makeFizzTable(fizzArr)

// function to display bizzbuzz table
function Fizzbuzzdisplay() {
    const fizzBuzzStyles = {
        border: '1px solid white',
        backgroundColor: 'cornflowerblue',
        color: 'black',
    }
    return (
        <div className='container'>
            <p style={fizzBuzzStyles}>{fizzTable}</p>
        </div>
    )
}

export default Fizzbuzzdisplay