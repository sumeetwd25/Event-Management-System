import indianCatering from './images/indian.jpeg';
import continentalCatering from './images/continental.jpeg';


const cateringData = [
    {
        name: "Indian Catering",
        description: "Delicious Indian cuisine with a variety of menu items.",
        menuItems: ["Biryani", "Paneer Tikka", "Butter Chicken", "Naan", "Gulab Jamun"],
        image: indianCatering,
    },
    {
        name: "Continental Catering",
        description: "Exquisite Continental dishes that cater to diverse tastes.",
        menuItems: ["Grilled Steak", "Pasta Alfredo", "Caesar Salad", "Garlic Bread", "Tiramisu"],
        image: continentalCatering,
    },
];


const CateringServices = () => {
    return (
        <div>
            <h1 className="text-center my-5">Catering Services</h1>
            <div className="row">
                {cateringData.map((catering, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card">
                            {/* Catering Image */}
                            <img
                                className="card-img-top"
                                src={catering.image}
                                alt={`${catering.name} Image`}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                {/* Catering Details */}
                                <h5 className="card-title">{catering.name}</h5>
                                <p className="card-text">{catering.description}</p>
                                <p className="card-text">
                                    <strong>Menu Items:</strong>
                                    <ul>
                                        {catering.menuItems.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CateringServices;