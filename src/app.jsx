import Game from './game.jsx'
import Headphone1 from '../image/headphone1.jpg'
export default function App() {
   
    return (
        <div className="Games">
            <Game
                img="./image/gamepad.jpg"
                name="Gamepad"
                company="samsung"
                type="gaming"
            />
            <Game
                img="./image/headphone.jpg"
                name="Headphone"
                company="samsung"
               type="Music & Game"
            />
            <Game
                img={Headphone1}
                name="Headphone ultra"
                company="samsung"
                type="Music & Game"
            />
            <Game 
                img="./image/virtualring.jpg"
                name="Ring"
                company="samsung"
                type="Ring"
            />
        </div>
    )
}
