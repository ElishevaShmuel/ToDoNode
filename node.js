import renderApi from '@api/render-api';

renderApi.auth('rnd_sLFXdnOvevUeOJtEcIK8LXDl0iTk');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));