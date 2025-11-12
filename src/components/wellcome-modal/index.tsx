import { WellcomeCard, WellcomeMain } from "./style";


interface WellcomeModalProps {
    onStart: () => void;
}

function WellcomeModal({ onStart }: WellcomeModalProps) {

    const handleClick = () => {
        setTimeout(() => {
            onStart()
        }, 400)
    }


    return (
        <WellcomeMain onClick={handleClick}>
            <WellcomeCard>
                <div className="card-content">
                    <h1 className="card-title ">
                        Easy Table
                    </h1>
                    <p className="card-p text-xl">
                        Bem-vindo ao nosso sistema de pedidos digital
                    </p>
                </div>

                <div className="space-y-4">
                    <div >
                        Clique em qualquer lugar da tela
                    </div>
                    <div >para começar a fazer seu pedido</div>
                </div>
            </WellcomeCard>
        </WellcomeMain>
    );
}

export default WellcomeModal;