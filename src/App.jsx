import images from './images.jsx';
import Profile   from "./profile.jsx";
import './App.css'

function App() {
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            <Profile name="Rowan Atkinson" description="Mr bean is a british sitcom." image={images.mrbean}/>
            <Profile name="Marylin Monoroe" description="she was an American actress and model." image={images.maryam}/>
            <Profile name="Cilian Murphy" description="Irish actor known for his intense performances." image={images.cilian}/>
            <Profile name="Maryam Mirzakhani" description="she was an American actress and model." image={images.marilyn}/>
            <Profile name="Wiliam Bradley Pitt" description="He is an American actor and film producer." image={images.bradpitt}/>
            <Profile name="Tom Hardy" description=" He is an English actor, producer, and screenwriter." image={images.hardy}/>
            <Profile name="Kylian Mbappé" description="He is a French professional footballer." image={images.nolan}/>
            <Profile name="Christopher Nolan" description="He is a British-American filmmaker and Hollywood director." image={images.mbape}/>
            <Profile name="Ebrahim Hamedi" description="Ebi, is an Iranian pop singer ." image={images.ebi}/>


        </div>
    );
}

export default App;
