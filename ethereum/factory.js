import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x70c4882eA99da417AbB9dAfa512FA545450870d6',
);

export default instance;
