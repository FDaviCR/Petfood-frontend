import './styles.css';
import Header from '../../components/header';

const Checkout = () => {
    return (
        <div className="h-100">
            <Header />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                        <span className="section-title">Dados de Entrega</span>
                        <div className="row mb-3">
                            <div className="col-12">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="CEP" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Cidade" />
                            </div>
                            <div className="col-6 pl-0">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Logradouro" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-5">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Número" />
                            </div>
                            <div className="col-5 pl-0">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Bairro" />
                            </div>
                            <div className="col-2 pl-0">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="UF" />
                            </div>
                        </div>

                        <span className="section-title">Dados de Pagamento</span>
                        <div className="row mb-3">
                            <div className="col-12">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Número do Cartão" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Validade" />
                            </div>
                            <div className="col-6 pl-0">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="CVV" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;