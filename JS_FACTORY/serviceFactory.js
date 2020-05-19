const Get = async (uri) => {
  try {
    let response = await fetch(uri);
    response = await data.json();
    return response;
  } catch (err) {
    return { error: err };
  }
};
const Post = async (uri, data) => {
  let response = await fetch(uri, {
    body: JSON.stringify(data),
  });
  response = await data.json();
  return response;
};

function getData(uri) {
  this.data = Get(uri);
}
function postData(uri) {
  this.data = Post(uri, data);
}

function Services() {
  this.callService = (method, uri, data) => {
    switch (method) {
      case 'GET':
        return new getData(uri);
        break;
      case 'POST':
        return new postData(uri, data);
        break;
    }
  };
}

const service = new Services();

service.callService('GET', 'URI');
