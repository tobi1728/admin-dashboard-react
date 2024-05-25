import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { Card } from 'react-bootstrap';


export const StatCard = ({ icon, title, value, percentage, isIncrease, topSellingProducts }) => {
    const renderCardContent = () => {
        if (topSellingProducts) {
            return (
                <div className="product-grid">
                    {topSellingProducts.map(product => (
                        <div key={product.id} className="product-item">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-details">
                                <div className="product-name">{product.name}</div>
                                <div className="product-units-sold">Units Sold: {product.units}</div>
                                <div className="product-sales">Sales: ${product.sales}</div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <>
                    <h3>{value}</h3>
                    <Card.Text as="div" className={`percentage-change ${isIncrease ? 'text-success' : 'text-danger'}`}>
                        {isIncrease ? <RiArrowUpSLine /> : <RiArrowDownSLine />} {percentage} Since last month
                    </Card.Text>
                </>
            );
        }
    };

    return (
        <Card className="stat-card">
            <Card.Body>
                <Card.Text as="div" className="icon-container">{icon}</Card.Text>
                <Card.Title>{title}</Card.Title>
                {renderCardContent()}
            </Card.Body>
        </Card>
    );
}