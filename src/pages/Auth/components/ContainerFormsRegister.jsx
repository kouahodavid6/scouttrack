import PropTypes from 'prop-types';

const ContainerFormsRegister = ({ children }) => {
    return(
        <div className="min-h-screen bg-violet-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
                { children }
            </div>
        </div>
    );
}
ContainerFormsRegister.propTypes = {
    children: PropTypes.node.isRequired
};

export default ContainerFormsRegister;