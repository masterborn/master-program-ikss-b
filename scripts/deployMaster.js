const axios = require('axios');

axios.post('https://api.vercel.com/v1/integrations/deploy/prj_AQyFQeM770IZsLlwXAKDSbvWrgll/MQG2p0ShU6')
  .then(() => console.log('✅ Deploying'))
  .catch(() => console.log('❌ Something went wrong.'));
