import React from 'react'
import './Count.css'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, restart } from './redux/slice/counterSlice';

export default function Count() {
    const {value,details} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    // const [state,setState]= useState(0)

    // const add =()=>{
    //   setState(state+1)
    // }

    // const remove =()=>{
    //     setState(state-1)
    // }

    // const reset =()=>{
    //     const count=0
    //     setState(count)
    // }
    return (
        <>
            <div>


                <div>
                    <div class="player">
                        <div class="top">
                            <button class="small">
                                <div class="inner_button">
                                </div>
                            </button>
                            <p class="indicator">TICKING NOW</p>
                            <button class="small">
                                <div class="inner_button">
                                </div>
                            </button>
                        </div>

                        <div class="center">
                            <h1>{value}</h1>
                            <h1>{details}</h1>
                            
                        </div>

                        <div class="song_details">
                            <div style={{ fontSize: '20px' }}>COUNTER</div>
                        </div>



                        <div class="controls" >
                            <button class="big" onClick={() => dispatch(decrement())}>
                                <div class="inner_button_big">
                                    <h1>-</h1>
                                </div>
                            </button>
                            <button class="big" >
                                <div class="inner_button_big" onClick={()=>{dispatch(restart())}}>
                                    <RestartAltIcon />
                                </div>
                            </button>

                            <button class="big" onClick={()=>{dispatch(increment())}}>
                                <div class="inner_button_big">
                                    <h1>+</h1>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>



            </div>
        </>
    )
}
