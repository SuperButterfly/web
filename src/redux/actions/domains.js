import axios from 'axios';

export const searchDomain = async (searchTerm) => {
    try {
      const response = await axios(
        `https://api.scaleway.com/domain/v2alpha2/domains?filter=name:like:${searchTerm}`,
        {
          headers: {
            'X-Auth-Token': '',
          },
        }
      );
      const { domains } = response.data;
    } catch (error) {
      console.error('Error searching for domains:', error);
    }
  };