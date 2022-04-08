import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import UsuariosList from './UsuarioList';
import UsuariosForm from './UsuariosForm';


function Usuarios() {
  let usuariosList = [
    { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454' },
    { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454' },
  ]
  const [usuarios, setUsuarios] = useState(usuariosList)

  const onClickAtualizar = () => {
    usuariosList = [
      { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454' },
      { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454' },
      { id: 3, nome: 'Ciclano', email: 'email3@teste', celular: '54 4566 5454' }
    ];
    setUsuarios(usuariosList);
  }
  // operação inserir
  const initialState = { id: null, nome: '', email: '', celular: '' }
  const [usuario, setUsuario] = useState(initialState)
  const [editando, setEditando] = useState(false)
  const inserir = () => {
    setUsuario(initialState);
    setEditando(true);
  }
  const salvar = () => {
    console.log('Salvar ...');
    setEditando(false);
  }
  const cancelar = () => {
    console.log('Cancelou ...');
    setEditando(false);
  }

  if (!editando) {
    return (
      <div className="App">
        <UsuariosList usuarios={usuarios} onClickAtualizar={onClickAtualizar}
          inserir={inserir} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <UsuariosForm usuario={usuario} setUsuario={setUsuario}
          salvar={salvar} cancelar={cancelar} />
      </div>
    );
  }
}
export default Usuarios;