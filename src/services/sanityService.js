import sanityClient from "../../sanity";

/* Service to fetch data from Sanity.io */
/* getData, getDataBySlug, getDataByCount */

class SanityService {
  /* FETCH SANITY DATA */
  getData = (type) => {
    return new Promise((resolve, reject) => {
      try {
        const query = `*[_type == '${type}']|order(orderRank)`;
        const data = sanityClient.fetch(query);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  /* FETCH SANITY DATA BY SLUG */
  getDataBySlug = (type, slug) => {
    return new Promise((resolve, reject) => {
      try {
        const query = `*[_type == '${type}' && slug.current == $slug][0]{
          ...,
          author->
        }`;
        const data = sanityClient.fetch(query, { slug });
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  /* FETCH SANITY DATA BY COUNT */
  getDataByCount = (type, count) => {
    return new Promise((resolve, reject) => {
      try {
        const query = `*[_type == '${type}']|order(orderRank)[0...${count}]`;
        const data = sanityClient.fetch(query);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  /* FETCH SANITY DATA WITH AUTHOR */
  getDataWithAuthor = (type, count) => {
    return new Promise((resolve, reject) => {
      try {
        const query = `*[_type == '${type}']{
          ...,
          author->
        }|order(orderRank)${count !== undefined ? `[0...${count}]` : ""}`;
        const data = sanityClient.fetch(query);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  /* FETCH SANITY DATA WITH CATEGORY */
  getDataWithCategory = (type, count) => {
    return new Promise((resolve, reject) => {
      try {
        const query = `*[_type == '${type}']{
              ...,
              category[]->
            }|order(orderRank)${count !== undefined ? `[0...${count}]` : ""}`;
        const data = sanityClient.fetch(query);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };
}

const instance = new SanityService();

export default instance;
