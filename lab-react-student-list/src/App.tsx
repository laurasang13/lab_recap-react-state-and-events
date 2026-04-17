import { useState } from 'react';
import './App.css';
import { studentsData } from './students';
import AddStudentForm from './components/AddStudentForm';

// Definir el tipo Student para TypeScript
type Student = {
  _id: string;
  fullName: string;
  image: string;
  phone: string;
  email: string;
  program: string;
  graduated: boolean;
};

// Iniciar el estado con los datos del archivo los students 
function App() {
  const [students, setStudents] = useState<Student[]>(studentsData);

  const addStudent = (newStudent: Student) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className="App">
      <h1>Student List Manager</h1>

      <div className="student-list">
          {students.map((student) => (
              <div key={student._id} className="student-card">
                  <img src={student.image} alt={student.fullName} />
                  <h3>{student.fullName}</h3>
                  <p><strong>Program:</strong> {student.program}</p>
                  <p><strong>Email:</strong> {student.email}</p>
                  <p><strong>Phone:</strong> {student.phone}</p>
                  <p className= "finalcard"><strong>Status:</strong> {student.graduated ? 'Graduated' : 'In Progress'}</p>
              </div>
          ))}
      </div>
      <AddStudentForm onAddStudent={addStudent} />
    </div>
  );
}

export default App;