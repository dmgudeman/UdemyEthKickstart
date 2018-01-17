import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = await Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description:
          'The manager created this campaign and can create requests',
        style: { overflowWrap: 'break-word' },
      },
      // {
      //   header: ,
      //   meta: ,
      //   description: ,
      // },
    ];
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h1>Hi there CampaignShow</h1>
        {this.renderCards()}
      </Layout>
    );
  }
}

export default CampaignShow;
