import { useState, useEffect } from 'react';
import ItemCardapio from './components/ItemCardapio';

export default function App() {
    const [cardapio, setCardapio] = useState([]);
    const [carrinho, setCarrinho] = useState(0);
    const [endereco, setEndereco] = useState('');
    const [modal, setModal] = useState({ aberto: false, mensagem: '' });

    const abrirModal = (mensagem) => setModal({ aberto: true, mensagem });

    useEffect(() => {
        setTimeout(
            () =>
                setCardapio([
                    {
                        id: 101,
                        nome: 'Combo Master',
                        descricao: 'Dois lanches + refri 2L',
                        preco: 65,
                    },
                    { id: 102, nome: 'Hambúrguer Vegano', descricao: 'Grão de bico', preco: 28 },
                    { id: 103, nome: 'Açaí na Tigela', descricao: '500ml', preco: 18 },
                ]),
            1000,
        );
    }, []);

    const finalizarCompra = () => {
        if (carrinho === 0) return abrirModal('Coloque algo no carrinho!');
        if (!endereco.trim()) return abrirModal('Informe o endereço de entrega!');

        abrirModal('Pedido realizado com sucesso!');
        setCarrinho(0);
        setEndereco('');
    };

    return (
        <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
            {modal.aberto && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.6)',
                        display: 'grid',
                        placeItems: 'center',
                        zIndex: 100,
                    }}>
                    <div
                        style={{
                            background: '#fff',
                            padding: 20,
                            borderRadius: 8,
                            textAlign: 'center',
                        }}>
                        <p>{modal.msg}</p>
                        <button onClick={() => setModal({ ...modal, aberto: false })}>OK</button>
                    </div>
                </div>
            )}

            <header>
                <h1>Cardápio Delivery | 🛒 {carrinho}</h1>
            </header>

            <main>
                {!cardapio.length ? (
                    <h2>🔄 Carregando...</h2>
                ) : (
                    cardapio.map((item) => (
                        <ItemCardapio
                            key={item.id}
                            {...item}
                            onAdd={() => setCarrinho((c) => c + 1)}
                        />
                    ))
                )}
            </main>

            <footer
                style={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    maxWidth: 300,
                }}>
                <input
                    placeholder="Rua e Número da Entrega"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    style={{ padding: 8 }}
                />
                <button
                    onClick={finalizarCompra}
                    style={{ padding: 12, fontWeight: 'bold', cursor: 'pointer' }}>
                    Finalizar Pedido
                </button>
            </footer>
        </div>
    );
}
