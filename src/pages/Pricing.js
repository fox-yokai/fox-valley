import React from 'react';
import Page from '../components/Page/Page';
import PricesText from '../components/PricesText/PricesText';

class Pricing extends React.Component {
    render() {
        return(
            <div>
                <Page heading="Prices">
                    <PricesText />
                </Page>
            </div>
        );
    }
}

export default Pricing;