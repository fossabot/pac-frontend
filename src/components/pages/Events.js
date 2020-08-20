import React from 'react';
import {InfoConsumer} from "../context";
import Info from "../Info";

import {events} from "../../testdata/data"

function Events() {
    return (
        <div className="container">
            <div className="row mt-5">
                <InfoConsumer>
                    {data => {
                        return data.info.map(item => {
                            return <Info key={item.id} item={item}/>
                        })
                    }}
                </InfoConsumer>
            </div>
        </div>
    );
}

export default Events;