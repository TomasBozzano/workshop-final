import { useState } from "react"
import { login } from '../../../services'

export function LoginForm() {

  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');
  const [loading, SetLoading] = useState(false)

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const data = {
      username,
      password,
    }
    try {
      SetLoading(true)
      const loginResponse = await login(data);
      console.log(loginResponse)
      // alert("Inicio de sesión exitoso")
    } catch (error) {
      alert(error.response.data.message)
    }
    finally{
      SetLoading(false)
    }
  }

  return (
    <div className="p-10">
      <form 
      className="flex flex-col gap-3 border border-black p-16 rounded"
      onSubmit={handleSubmit}>
        <h1 className="font-bold text-3xl">Inicio de Sesión</h1>
        <input type="text"
        className="bg-slate-200 p-2 rounded"
        placeholder="Usuario"
        onChange={(e) =>{
          SetUsername(e.target.value)
        }}
        />
        <input type="password" 
        className="bg-slate-200 p-2 rounded"
        placeholder="Contraseña"
        onChange={(e)=>{
          SetPassword(e.target.value)
        }}
        />
        <button
        className="bg-green-400 p-2 rounded text-white"
        disabled={loading}
        >
          {loading ? "Cargando.." : "Ingresar"}
        </button>
      </form>
    </div>
  )
}
