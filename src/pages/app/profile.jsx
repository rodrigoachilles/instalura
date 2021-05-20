import React from 'react';
import authService from '../../services/auth/authService';
import useUserService from '../../services/user/hook/useUserService';

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);
  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    return {
      props: {
        user: {
          ...session,
        },
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();

  return {
    props: {},
  };
}

export default function ProfilePage(props) {
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
      <img src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" alt="Nicolas Cage" />
    </div>
  );
}
