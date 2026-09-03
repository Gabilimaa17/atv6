import ItemCardapio from './components/ItemCardapio'; // Ajuste o caminho se necessário

const bancoDeDados = [
    { id: 1, nome: 'X-Bacon Duplo', descricao: 'Duas carnes e muito bacon.', preco: 35.0 },
    { id: 2, nome: 'Pizza Calabresa', descricao: 'Tamanho Média 8 pedaços.', preco: 45.0 },
    { id: 3, nome: 'Suco de Laranja', descricao: 'Copo 500ml natural.', preco: 8.0 },
    { id: 4, nome: 'Pudim Caseiro', descricao: 'Fatia caprichada com calda extra.', preco: 12.0 },
];

export default function App() {
    return (
        <div>
            {/* Seu cabeçalho do projeto */}
            <header>
                <h1>Cardápio Delivery</h1>
            </header>

            {/* Renderização dinâmica dos itens */}
            <main>
                {bancoDeDados.map((item) => (
                    <ItemCardapio
                        key={item.id}
                        nome={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                    />
                ))}
            </main>
        </div>
    );
}
