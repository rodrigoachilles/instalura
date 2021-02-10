import React from 'react';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

const links = [
    {
        texto: 'Home',
        url: '/'
    },
    {
        texto: 'Perguntas frequentes',
        url: '/faq'
    },
    {
        texto: 'Sobre',
        url: '/sobre'
    }
]

export default function Menu() {
return (
    <MenuWrapper>
        <MenuWrapper.LeftSide>
            <Logo />
        </MenuWrapper.LeftSide>
        <MenuWrapper.CenterSide>
            {links.map((link,index) => {
                return (
                    <li key={index}>
                        <a href={link.url}>
                            {link.texto}
                        </a>
                    </li>
                )
            })}
        </MenuWrapper.CenterSide>
        <MenuWrapper.RightSide>
            <Button type="button" ghost variant="secondary.main">
                Entrar
            </Button>
            <Button type="button" variant="primary.main">
                Cadastrar
            </Button>
        </MenuWrapper.RightSide>
    </MenuWrapper>
)
}