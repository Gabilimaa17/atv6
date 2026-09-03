import { useState, useEffect } from 'react';
import ItemCardapio from './components/ItemCardapio';

function App() {
    const [cardapio, setCardapio] = useState([]);

    useEffect(() => {
        console.log('Conectando ao servidor...');

        setTimeout(() => {
            setCardapio([
                {
                    id: 101,
                    nome: 'Combo Master',
                    descricao: 'Dois lanches + refri 2L',
                    preco: 65.0,
                },
                {
                    id: 102,
                    nome: 'Hambúrguer de Grão de Bico',
                    descricao: 'Opção Vegana',
                    preco: 28.0,
                },
                {
                    id: 103,
                    nome: 'Açaí na Tigela',
                    descricao: '500ml com morango e leite condensado',
                    preco: 18.0,
                },
            ]);
        }, 2000);
    }, []);

    return (
        <div>
            <header>
                <h1>Cardápio Delivery</h1>
            </header>

            <main>
                {cardapio.length === 0 ? (
                    <h2>🔄 Carregando restaurante...</h2>
                ) : (
                    cardapio.map((item) => (
                        <ItemCardapio
                            key={item.id}
                            nome={item.nome}
                            descricao={item.descricao}
                            preco={item.preco}
                        />
                    ))
                )}
            </main>
        </div>
    );
}
export default App;
