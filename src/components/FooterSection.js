import React from 'react';
import Row from 'react-bootstrap/Row';

const FooterSection = () => {
    return (
        <Row className = "footer">
            Created by &nbsp;
            <a href = "https://github.com/AlishaPanday/employee-directory" target = "_blank">Alisha Panday</a> <br  />
            Powered by &nbsp;
            <i className = 'fab fa-react'>React</i>
        </Row>
    );
};

export default FooterSection;