import React from 'react';
import Page from '../components/Page/Page';
import PricesText from '../components/PricesText/PricesText';

class Pricing extends React.Component {
    render() {
        return(
            <main>
                <Page heading="Prices">
                    <PricesText />
                </Page>
            </main>
        );
    }
}

export default Pricing;