import React, { useState } from 'react';

function UsuariosList(props) {
    return (
        <div>
            <h4>Manutenção Usuário</h4>
            <button onClick={props.onClickAtualizar} type="button" class="btn btn-primary btn-sm">Atualizar Lista</button>
            <button type="button" class="btn btn-primary btn-sm" onClick={props.inserir}>Inserir</button>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Celular</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.usuarios.length > 0 ? (props.usuarios.map((o, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{o.id}</td>
                            <td>{o.nome}</td>
                            <td>{o.email}</td>
                            <td>{o.celular}</td>
                            <td>
                                <button  type="button" class="btn btn-primary btn-sm">Alterar</button>
                                <button  type="button" class="btn btn-primary btn-sm">Excluir</button>
                            </td>
                        </tr>
                    ))) : (
                        <tr>
                            <td colSpan={3}>Nenhum usuário.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default UsuariosList;