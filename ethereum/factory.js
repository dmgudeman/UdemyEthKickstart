import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x27aB21f36e64Cc24CD27384ca0648A40F37800F6',
);

export default instance;
