import React, { Component } from 'react';
import Banner from './Banner';
import Item from './Item';

export default class Body extends Component {
    render() {
        return (
            <div>

                <Banner />

                <section class="pt-4">
                    <div class="container px-lg-5">
                        <div class="row gx-lg-5">
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}
