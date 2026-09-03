export default function ItemCardapio({ nome, descricao, preco }) {
    return (
        <div className="card-item">
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <span>R$ {preco.toFixed(2)}</span>
        </div>
    );
}
