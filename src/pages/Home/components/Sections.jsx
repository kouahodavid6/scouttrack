import PropTypes from 'prop-types';

const Sections = ({children, className}) => {
    return(
        <section className={className}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    { children }
                </div>
            </div>
        </section>
    );
}

Sections.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired
};

export default Sections;