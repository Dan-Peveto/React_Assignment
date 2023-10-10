import Header from "./Components/Header"
import Fizzbuzzdisplay from "./Components/fizzBuzz"
import CountBsDisplay from "./Components/countingBs"
import CountUserDisplay from "./Components/CountingUser"
import MountTable from "./Components/Mounts"

function App() {
    
    return (
        <>
            <Header />
            <div className='container'>
                <h3>FIZZBUZZ</h3>
                    <div class='fiSzz'style={{borderBottom: '5px solid', paddingBottom: '25px'}}>
                        <Fizzbuzzdisplay />
                    </div>
                <h3 style={{paddingTop:'15px'}}>Bean Counting</h3>
                    <div class='flexContainer'>
                        <div class='column'>
                            <h4>Counting The Bs</h4>
                                <p>How many "B's in your text"</p>
                                    <CountBsDisplay />
                        </div>
                        <div class='column'>
                                <h4>Counting The Letter</h4>
                                <p>Now You pick the letter</p>
                                    <CountUserDisplay />
                        </div>
                    </div>
                    <div class='border' style={{borderBottom: '5px solid',}}></div>
                <h3 style={{paddingTop: '15px'}}>Mountains Across The World</h3>
                    <MountTable />
            </div>
            <div class='border' style={{borderBottom: '5px solid', paddingBottom: '25px'}}></div>
        </>
    )
}

export default App