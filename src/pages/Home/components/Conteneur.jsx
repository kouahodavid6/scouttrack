import PropTypes from 'prop-types';

const Conteneur = ({children}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden ">
            { children }
        </div>
    );
}

Conteneur.propTypes = {
    children: PropTypes.node.isRequired
};

export default Conteneur;