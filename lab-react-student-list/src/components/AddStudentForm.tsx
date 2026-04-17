import { useState } from "react";
//preguntar por FormEvent


interface AddStudentFormProps {
  onAddStudent: (student: any) => void;
}

function AddStudentForm({ onAddStudent }: AddStudentFormProps) {
  // 1. Definimos un estado para cada input
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduated, setGraduated] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newStudent = {
      _id: crypto.randomUUID(),
      fullName,
      image,
      phone,
      email,
      program,
      graduated
    };
    
    //limpiar formulario
    onAddStudent(newStudent);

    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduated(false);
  };

  //Obtenemos formulario
  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <span>Add Student</span>
        <div>
          <label>
            <input name="fullName" type="text" placeholder="Full Name" 
                   value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </label>

          <label>
            <input name="image" type="url" placeholder="Image" 
                   value={image} onChange={(e) => setImage(e.target.value)} required />
          </label>
          <div className="phone-email-group">
            <label>
              <input name="phone" type="tel" placeholder="Phone" 
                    value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </label>

            <label>
              <input name="email" type="email" placeholder="Email" 
                    value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            </div>
        </div>

        <div>
          <label>Program
            <select name="program" value={program} onChange={(e) => setProgram(e.target.value)} required>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UX/UI">UX/UI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <div className="checkbox-group">
            <label className="checkbox-container">
              <span className="label-text">Graduated</span>
              <input 
              name="graduated" 
              type="checkbox" 
              checked={graduated} 
              onChange={(e) => setGraduated(e.target.checked)} 
              />
              <div className= "gratuated-box">
                <span className="checkmark"></span>
              </div>
            </label>
            <button className="button-container" type="submit">Add Student</button>
          </div>
          
          
        </div>
      </form>
    </section>
  );
}

export default AddStudentForm;