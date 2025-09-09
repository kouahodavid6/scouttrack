import PropTypes from 'prop-types';

const ContainerFormsLogin = ({ children }) => {
    return(
        <div className="min-h-screen bg-violet-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                { children }
            </div>
        </div>
    );
}
ContainerFormsLogin.propTypes = {
    children: PropTypes.node.isRequired
};

export default ContainerFormsLogin;