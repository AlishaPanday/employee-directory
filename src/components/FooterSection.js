import React from 'react';
import Row from 'react-bootstrap/Row';

const FooterSection = () => {
    return (
        <Row className = "footer fixed-bottom" fixed='bottom'>
            Created by &nbsp;
            <a 
                href = "https://github.com/AlishaPanday/employee-directory" target = "_blank">Alisha Panday</a> <br  />
               
            <i className = 'fab fa-react'>React</i>
        </Row>
    );
};

export default FooterSection;