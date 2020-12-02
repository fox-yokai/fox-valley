import React, { Fragment } from 'react';

const PricesText = () => {
    return (
        <Fragment>
            <p>Commissions are currently <strong>closed</strong>.</p>
            <p>To see my current work progress check out my <a href="https://trello.com/b/hWcuVR2E/fox-valley-commissions" target="_blank">Fox Valley Trello</a></p>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <table className="table">
                            <caption>Base prices of plushes</caption>
                            <thead>
                                <tr>
                                    <th scope='col'>Type</th>
                                    <th scope='col'>Base Price (USD)</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td scope='row'>Teddy Bear</td>
                                        <td>350</td>
                                    </tr>
                                    <tr>
                                        <td scope='row'>Anthro</td>
                                        <td>250</td>
                                    </tr>
                                    <tr>
                                        <td scope='row'>Kuttari</td>
                                        <td>75</td>
                                    </tr>
                                </tbody>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <table className="table">
                            <caption>Extras</caption>
                            <thead>
                                <tr>
                                    <th scope='col'>Type</th>
                                    <th scope='col'>Additional Price (USD)</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td scope='row'>Magnets only</td>
                                        <td>+10</td>
                                    </tr>
                                    <tr>
                                        <td scope='row'>Magnets with prop</td>
                                        <td>+20-30 (depending on complexity)</td>
                                    </tr>
                                    <tr>
                                        <td scope='row'>Magnetic removable limb</td>
                                        <td>+40</td>
                                    </tr>
                                    <tr>
                                        <td scope='row'>Clothing</td>
                                        <td>+50-60 per item (depending on complexity)</td>
                                    </tr>
                                </tbody>
                            </thead>
                        </table>
                    </div>
                </div>

            </div>

        </Fragment>
    );
};

export default PricesText;