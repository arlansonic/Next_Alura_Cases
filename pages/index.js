import Link from '../src/components/Link'
import React from 'react'


function Title({ children, as }) {
    const Tag = as
    return (
        <React.Fragment>
            <Tag>
                {children}
            </Tag>
            <style jsx>{`
                ${Tag} {
                    color: red;
                    font-family: sans-serif;
                }
            `}
            </style>
        </React.Fragment>
    )
}

export default function HomePage() {
    return (
        <div>
            <Title as="h1">Alura Cases - Home</Title>
            <Link href="/faq">
                Ir para a Pagina do FAQ
            </Link>
        </div>
    )
}