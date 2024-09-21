
import './App.css';
import MarkSheet from './components/MarkSheet';

function App() {
  return (
    <div className="App">
     <MarkSheet studentName="Ankitha" engMarks="75" telMarks="90" hinMarks="78" matMarks="93" sciMarks="66" sociMarks="77"></MarkSheet>
     <MarkSheet studentName="Sadhana" engMarks="56" telMarks="79" hinMarks="67" matMarks="32" sciMarks="45" sociMarks="69"></MarkSheet>
     <MarkSheet studentName="Jansi" engMarks="30" telMarks="46" hinMarks="60" matMarks="70" sciMarks="63" sociMarks="59"></MarkSheet>
     <MarkSheet studentName="Lekha" engMarks="67" telMarks="77" hinMarks="69" matMarks="78" sciMarks="70" sociMarks="65"></MarkSheet>
    </div>
  );
}

export default App;
