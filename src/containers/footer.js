const Footer = props => {
    return (
        <footer className="absolute bottom-0 left-0 right-0 text-center py-4">
            <p className="text-gray-500">
                {props.text}
            </p>
        </footer>
    );
};

export default Footer;