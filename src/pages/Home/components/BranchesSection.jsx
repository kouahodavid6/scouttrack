import PropTypes from 'prop-types';
import { Users } from 'lucide-react';

const BranchesSection = ({ name, ageRange, color, description, imageUrl }) => {
  // Map des couleurs Tailwind
    const colorClasses = {
        pink: 'bg-pink-100 text-pink-600',
        yellow: 'bg-yellow-100 text-yellow-600',
        green: 'bg-green-100 text-green-600',
        orange: 'bg-orange-100 text-orange-600',
        red: 'bg-red-100 text-red-600'
    };

    return (
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow h-full">
            <img 
                src={imageUrl} 
                alt={name}
                className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <div className={`w-12 h-12 rounded-full ${colorClasses[color]} flex items-center justify-center mb-4`}>
                <Users className="w-6 h-6" />
            </div>
            <div className='flex flex-col items-start'>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-start">
                    {name}
                </h3>
                <span className="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-3 text-start">
                    {ageRange}
                </span>
            </div>
            
            <p className="text-gray-600 mb-4 text-start">
                {description}
            </p>
        </div>
    );
};

BranchesSection.propTypes = {
    name: PropTypes.string.isRequired,
    ageRange: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['pink', 'yellow', 'green', 'orange', 'red']).isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

const BranchesSections = ({ branches }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch) => (
                <BranchesSection 
                    key={branch.name}
                    name={branch.name}
                    ageRange={branch.ageRange}
                    color={branch.color}
                    description={branch.description}
                    imageUrl={branch.imageUrl}
                />
            ))}
        </div>
    );
};

BranchesSections.propTypes = {
    branches: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            ageRange: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired
        })
    ).isRequired
};

export default BranchesSections;