import React from 'react';
import useUserService from '../../../services/user/hook/useUserService';

export default function ProfileScreen(props) {
  const dados = useUserService.getProfilePage();

  return (
    <div>
      Página de Profile!

      <p>
        {dados.loading && 'Loading...'}
        {!dados.loading && dados.data && 'Carregou com sucesso'}
        {!dados.loading && dados.error}
      </p>

      <pre>
        {JSON.stringify(props, null, 4)}
      </pre>
      {/* <pre>
        {JSON.stringify(dados.data, null, 4)}
      </pre> */}
    </div>
  );
}
