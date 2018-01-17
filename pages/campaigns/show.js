import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = await Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    console.log(summary);
    return {};
  }
  render() {
    return (
      <Layout>
        <h1>Hi there CampaignShow</h1>
      </Layout>
    );
  }
}

export default CampaignShow;
