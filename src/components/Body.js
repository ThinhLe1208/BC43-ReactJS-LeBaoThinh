import React, { Component } from 'react';
import Banner from './Banner';
import Item from './Item';
import { BiCollection, BiCloudDownload, BiCode } from 'react-icons/bi';
import { BsCardHeading, BsBootstrap, BsPatchCheck } from 'react-icons/bs';

const data = [
    { Icon: BiCollection, title: 'Fresh new layout', content: 'With Bootstrap 5, we\'ve created a fresh new layout for this template!' },
    { Icon: BiCloudDownload, title: 'Free to download', content: 'As always, Start Bootstrap has a powerful collectin of free templates.' },
    { Icon: BsCardHeading, title: 'Jumbotron hero header', content: 'The heroic part of this template is the jumbotron hero header!' },
    { Icon: BsBootstrap, title: 'Feature boxes', content: 'We \'ve created some custom feature boxes using Bootstrap Icons!' },
    { Icon: BiCode, title: 'Simple clean code', content: 'We keep our dependencies up to date and squash bugs as they come!' },
    { Icon: BsPatchCheck, title: 'A name you trust', content: 'Start Bootstrap has been the leader in free Bootstrap templates since 2013!' },
];

export default class Body extends Component {
    renderItems = () => {
        return data.map((item, index) => {
            return <Item key={index} data={item} />;
        });
    };

    render() {
        return (
            <div>

                <Banner />

                <section className="pt-4">
                    <div className="container px-lg-5">
                        <div className="row gx-lg-5">
                            {this.renderItems()}
                        </div>
                    </div>
                </section >

            </div >
        );
    }
}
