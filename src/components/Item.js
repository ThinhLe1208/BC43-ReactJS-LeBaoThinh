import React, { Component } from 'react';
import { IconContext } from "react-icons";

export default class Item extends Component {
    render() {
        const { Icon, title, content } = this.props.data;

        return (
            <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature d-inline-block bg-primary bg-gradient text-white rounded-3 px-3 py-3" style={{ transform: 'translateY(-50%)' }}>
                            <IconContext.Provider value={{ size: "2em" }}>
                                <div>
                                    <Icon />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <h2 className="fs-4 fw-bold">{title}</h2>
                        <p className="mb-0">{content}</p>
                    </div>
                </div>
            </div >
        );
    }
}
