import PropTypes from 'prop-types';
import { Calendar, ArrowRight } from 'lucide-react';

const ActivitesSection = ({ title, date, description, imageUrl }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
        <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover"
        />
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center mb-2">
                <Calendar className="mr-2 text-violet-600 size={18}" />
                <span className="text-sm text-violet-600">
                    {date}
                </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{description}</p>
            <button className="flex items-center justify-center py-2 border-2 border-violet-600 rounded-lg gap-3 bg-transparent hover:bg-violet-600 text-violet-600 hover:text-white font-medium transition duration-300">
                En savoir plus
                <ArrowRight />
            </button>
        </div>
    </div>
);

ActivitesSection.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

const ActivitesSections = ({ activities }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity) => (
            <ActivitesSection key={activity.id} {...activity} />
        ))}
    </div>
);

ActivitesSections.propTypes = {
    activities: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default ActivitesSections;