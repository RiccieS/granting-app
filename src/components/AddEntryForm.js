import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGrade } from '../features/grade';

function AddEntryForm({}) {
  const dispatch = useDispatch();

  const [idGrade, setIdGrade] = useState('');
  const [idStudent, setIdStudent] = useState('');
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');

  /*const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = { 
      id_grade: idGrade,
      id_student: idStudent,
      semester,
      subject,
      grade
    };
    const updatedObject = { ...jsonObject, entry: newEntry };
    onUpdate(updatedObject);
  };*/

  return (
    <form /*onSubmit={handleSubmit}*/>
      <button type="submit" onClick={()=>{
        dispatch(addGrade({semester: 666, subject: "nejaky", grade: 666}))
        }}>Add Entry</button>
    </form>
  );
}

export default AddEntryForm;